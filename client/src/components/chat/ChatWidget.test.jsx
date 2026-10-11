import { afterEach, describe, expect, it, vi } from "vitest";
import { act, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderPage } from "../../test/render";
import ChatWidget from "./ChatWidget";
import { ChatError, streamChat, warmUpChat } from "../../lib/chatApi";
import RichText from "./richText";

/** A fetch Response whose body streams the given server-sent events. */
function sseResponse(events, headers = {}) {
  const body = new ReadableStream({
    start(controller) {
      const enc = new TextEncoder();
      for (const e of events) controller.enqueue(enc.encode(`data: ${JSON.stringify(e)}\n\n`));
      controller.close();
    },
  });
  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "text/event-stream", ...headers },
  });
}

// The wake-up ping is covered in chatApi.test.js; here it would take the
// first mocked fetch response.
vi.mock("../../lib/chatApi", async (importOriginal) => {
  const actual = await importOriginal();
  return { ...actual, warmUpChat: vi.fn(), streamChat: vi.fn(actual.streamChat) };
});

afterEach(() => {
  vi.restoreAllMocks();
  sessionStorage.clear();
});

describe("ChatWidget", () => {
  it("opens from the launcher and streams a reply", async () => {
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(
        sseResponse(
          [
            { type: "text", text: "We build " },
            { type: "text", text: "**AI systems**." },
            { type: "done" },
          ],
          { "X-Conversation-Id": "conv-123" }
        )
      )
      .mockResolvedValueOnce(
        sseResponse([{ type: "text", text: "Usually 4 to 8 weeks." }, { type: "done" }])
      );
    const user = userEvent.setup();
    renderPage(<ChatWidget />);

    await user.click(screen.getByRole("button", { name: "Chat with Axiomra Assistant" }));
    expect(screen.getByRole("dialog", { name: "Axiomra Assistant" })).toBeInTheDocument();
    // Opening the chat wakes the API while the visitor types.
    expect(warmUpChat).toHaveBeenCalled();

    await user.type(
      screen.getByLabelText("Message Axiomra Assistant"),
      "What services do you offer?{Enter}"
    );

    expect(await screen.findByText("AI systems")).toBeInTheDocument();
    // Only the new message travels; a new chat has no conversation id yet.
    const first = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(first).toEqual({ message: "What services do you offer?" });

    // The next turn carries the id the server minted on the first reply.
    await user.type(screen.getByLabelText("Message Axiomra Assistant"), "How long?{Enter}");
    expect(await screen.findByText("Usually 4 to 8 weeks.")).toBeInTheDocument();
    const second = JSON.parse(fetchMock.mock.calls[1][1].body);
    expect(second).toEqual({ message: "How long?", conversationId: "conv-123" });
  });

  it("shows the server's error and restores the draft", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(
        JSON.stringify({
          error: "You're sending messages quickly. Please wait a few minutes and try again.",
          code: "rate_limited",
        }),
        { status: 429 }
      )
    );
    const user = userEvent.setup();
    renderPage(<ChatWidget />);

    await user.click(screen.getByRole("button", { name: "Chat with Axiomra Assistant" }));
    const input = screen.getByLabelText("Message Axiomra Assistant");
    await user.type(input, "Hello{Enter}");

    expect(await screen.findByRole("alert")).toHaveTextContent("sending messages quickly");
    await waitFor(() => expect(input).toHaveValue("Hello"));
  });
});

describe("ChatWidget while the server wakes", () => {
  it("shows Connecting, then the slow-start notice, then unavailable with contacts", async () => {
    let release;
    let handlers;
    streamChat.mockImplementationOnce((_body, h) => {
      handlers = h;
      return new Promise((_, reject) => (release = reject));
    });
    const user = userEvent.setup();
    renderPage(<ChatWidget />);
    await user.click(screen.getByRole("button", { name: "Chat with Axiomra Assistant" }));
    await user.type(screen.getByLabelText("Message Axiomra Assistant"), "Hello{Enter}");

    act(() => handlers.onRetry(2));
    expect(await screen.findByText("Connecting...")).toBeInTheDocument();

    act(() => handlers.onSlow());
    expect(
      await screen.findByText(/Server is starting, this can take up to 30 seconds/)
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "info@axiomra.co" })).toHaveAttribute(
      "href",
      "mailto:info@axiomra.co"
    );

    act(() => release(new ChatError("unavailable")));
    const alert = await screen.findByRole("alert");
    expect(alert).toHaveTextContent("Chat is unavailable right now.");
    expect(within(alert).getByRole("link", { name: /WhatsApp/ })).toHaveAttribute(
      "href",
      "https://wa.me/16575203444"
    );
  });
});

describe("RichText", () => {
  it("renders bullets, bold, emails and site links", () => {
    renderPage(<RichText text={"Reach us:\n- **Sales**: sales@axiomra.co\n- Visit /contact."} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText("Sales").tagName).toBe("STRONG");
    expect(screen.getByRole("link", { name: "sales@axiomra.co" })).toHaveAttribute(
      "href",
      "mailto:sales@axiomra.co"
    );
    expect(screen.getByRole("link", { name: "/contact" })).toHaveAttribute("href", "/contact");
  });
});
