import { Router } from "express";
import { Agent, run, user, assistant, setTracingDisabled } from "@openai/agents";
import { z } from "zod";
import { CHAT_SYSTEM_PROMPT } from "../lib/chatKnowledge.js";
import { release, reserve, settle } from "../lib/chatBudget.js";
import { CHAT_MODEL } from "../lib/chatConfig.js";
import { appendTurns, loadConversation } from "../lib/chatConversations.js";
import { logChatFailure } from "../lib/chatLog.js";
import { createReplyFilter } from "../lib/chatText.js";
import { referenceContext } from "../rag/context.js";

const router = Router();

// Traces would be uploaded after every reply; a stateless FAQ chat does not need them.
setTracingDisabled(true);

// A visitor chat, not a document pipeline: the caps keep one conversation's
// cost bounded no matter what the browser sends.
const MAX_CHARS = 2000;

const content = z.string().trim().min(1).max(MAX_CHARS);

// The browser sends its new message and the conversationId it was given; the
// history comes from lib/chatConversations.js, never from the request.
const bodySchema = z
  .strictObject({
    conversationId: z.string().max(100).optional(),
    message: content.optional(),
    // TEMPORARY SHIM, remove by 2026-10-06: see SECURITY-DEFERRED.md,
    // "Legacy `messages` array on POST /api/chat". Not a supported path; it
    // exists only for widget bundles still open in tabs from before
    // conversationId. Only the last turn is used, and any role other than
    // "user" anywhere in it is a 400.
    messages: z
      .array(z.strictObject({ role: z.literal("user"), content }))
      .min(1)
      .optional(),
  })
  .refine(
    (b) => (b.message === undefined) !== (b.messages === undefined),
    "Send exactly one of message or messages."
  );

// Reasoning models reject sampling settings and vice versa, so the settings
// follow the configured model family.
const isReasoningModel = /^(gpt-5|o\d)/.test(CHAT_MODEL);

const MAX_OUTPUT_TOKENS = isReasoningModel ? 2048 : 700;
const INSTRUCTIONS = CHAT_SYSTEM_PROMPT;

const DAILY_CAP_REACHED =
  "Our assistant has reached its limit for today. Please try again tomorrow, " +
  "or reach us through the contact form and we'll get back to you.";

const agentConfig = (instructions) => ({
  name: "Axiomra Assistant",
  instructions,
  model: CHAT_MODEL,
  modelSettings: {
    // Replies are short by instruction; the cap bounds cost per turn.
    maxTokens: MAX_OUTPUT_TOKENS,
    // Visitor conversations are not kept on OpenAI's side.
    store: false,
    // A FAQ-style chat does not need deep reasoning, and minimal effort answers faster.
    ...(isReasoningModel ? { reasoning: { effort: "minimal" } } : { temperature: 0.3 }),
  },
});

const agent = new Agent(agentConfig(INSTRUCTIONS));

// A turn with reference material runs on its own copy of the agent; the
// static prompt stays first so OpenAI's prefix cache still hits.
const agentFor = (instructions) =>
  instructions === INSTRUCTIONS ? agent : new Agent(agentConfig(instructions));

/**
 * Body: { message, conversationId? }. The conversation's id comes back in the
 * X-Conversation-Id header; send it with the next turn to keep the context.
 *
 * Streams the assistant's reply as server-sent events:
 *   data: {"type":"text","text":"..."}   one per chunk
 *   data: {"type":"done"}
 *   data: {"type":"error","error":"..."}  after headers were already sent
 *
 * Refusals before the stream are JSON { error, code }, where code is one of
 * invalid_request, unavailable, daily_cap (rate_limited comes from the limiter).
 * Every failure is logged once through logChatFailure.
 */
const UNAVAILABLE = { error: "The assistant is not available right now.", code: "unavailable" };

router.post("/", async (req, res) => {
  const started = Date.now();
  const fail = (reason, details) =>
    logChatFailure(reason, { ms: Date.now() - started, ...details });

  // Watched from the start: a visitor who gives up during retrieval (a cold
  // start, a slow network) must not leave a reservation or a model run behind,
  // because the widget retries that same message.
  const controller = new AbortController();
  let clientGone = false;
  res.on("close", () => {
    if (res.writableFinished) return;
    clientGone = true;
    controller.abort();
  });

  const parsed = bodySchema.safeParse(req.body);
  if (!parsed.success) {
    fail("invalid_request");
    return res.status(400).json({ error: "Invalid chat request.", code: "invalid_request" });
  }

  if (!process.env.OPENAI_API_KEY) {
    fail("no_api_key");
    return res.status(503).json(UNAVAILABLE);
  }

  const { data } = parsed;
  const text = data.message ?? data.messages.at(-1).content;

  // Both checked before any header goes out, so a refusal is a plain JSON
  // error, and both fail closed: no store means no context and no spend cap.
  let conversation;
  try {
    conversation = await loadConversation(data.conversationId);
  } catch (err) {
    fail("history_store_unavailable", { error: err.message });
    return res.status(503).json(UNAVAILABLE);
  }

  // Never throws: on any retrieval failure the turn uses the static prompt.
  const { instructions } = await referenceContext({
    base: INSTRUCTIONS,
    history: conversation.history,
    text,
  });

  if (clientGone) {
    fail("client_gone_before_model", { stage: "retrieval" });
    return;
  }

  let reservation;
  try {
    reservation = await reserve({
      model: CHAT_MODEL,
      inputChars:
        instructions.length +
        text.length +
        conversation.history.reduce((n, t) => n + t.content.length, 0),
      maxOutputTokens: MAX_OUTPUT_TOKENS,
    });
  } catch (err) {
    fail("budget_store_unavailable", { error: err.message });
    return res.status(503).json(UNAVAILABLE);
  }
  if (!reservation) {
    fail("daily_cap");
    return res.status(429).json({ error: DAILY_CAP_REACHED, code: "daily_cap" });
  }
  if (clientGone) {
    // The model was never called, so the whole reservation goes back.
    await release(reservation).catch((err) =>
      console.error("Chat: could not release reservation:", err.message)
    );
    fail("client_gone_before_model", { stage: "reserve" });
    return;
  }

  res.status(200).set({
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-cache, no-transform",
    Connection: "keep-alive",
    // Stops proxies (nginx and friends) from buffering the whole reply.
    "X-Accel-Buffering": "no",
    "X-Conversation-Id": conversation.id,
  });
  res.flushHeaders();
  const send = (event) => res.write(`data: ${JSON.stringify(event)}\n\n`);

  const input = [
    ...conversation.history.map((t) =>
      t.role === "user" ? user(t.content) : assistant(t.content)
    ),
    user(text),
  ];

  let usage;
  let reply = "";
  // Dashes and heading marks are rewritten before the visitor or the stored
  // history sees them; see lib/chatText.js.
  const filter = createReplyFilter();
  const forward = (chunk) => {
    if (!chunk) return;
    reply += chunk;
    send({ type: "text", text: chunk });
  };
  try {
    const result = await run(agentFor(instructions), input, {
      stream: true,
      maxTurns: 1,
      signal: controller.signal,
    });
    for await (const chunk of result.toTextStream()) {
      if (chunk) forward(filter.push(chunk));
    }
    forward(filter.flush());
    await result.completed;
    usage = result.state?.usage;
    if (result.error) throw result.error;
    // Only a completed exchange is remembered; a failed turn is retried by
    // the visitor and would otherwise appear twice. A store hiccup here costs
    // the next turn its context, not this reply.
    await appendTurns(conversation.id, [
      { role: "user", content: text },
      { role: "assistant", content: reply },
    ]).catch((err) => console.error("Chat: could not save conversation:", err.message));
    send({ type: "done" });
  } catch (err) {
    if (controller.signal.aborted) {
      fail("client_aborted", { chars: reply.length });
      return;
    }
    fail("model_error", { status: err.status, chars: reply.length, error: err.message });
    send({
      type: "error",
      error: "The assistant ran into a problem. Please try again.",
      code: "model_error",
    });
  } finally {
    // Before res.end(): a serverless instance may be frozen once the
    // response is finished, and the write would never land.
    await settle(reservation, usage).catch((err) =>
      console.error("Chat: could not record spend:", err.message)
    );
    res.end();
  }
});

export default router;
