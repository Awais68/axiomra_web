/**
 * One greppable line per failed chat turn, so the failure mix can be read
 * from the host's logs: `grep "Chat failure" | grep -o "reason=[a-z_]*"`.
 *
 * Reasons:
 *   invalid_request               body failed validation (400)
 *   no_api_key                    OPENAI_API_KEY missing (503)
 *   rate_limited                  per-IP chat limit hit (429)
 *   rate_limit_store_unavailable  Redis down, chat limiter fails closed (503)
 *   history_store_unavailable     conversation could not be loaded (503)
 *   budget_store_unavailable      spend counter could not be reserved (503)
 *   daily_cap                     daily USD cap reached (429)
 *   client_gone_before_model      visitor left before the model was called; nothing billed
 *   client_aborted                visitor left while the model was running
 *   model_error                   the OpenAI run failed (error event sent)
 */
export function logChatFailure(reason, details = {}) {
  const extra = Object.entries(details)
    .filter(([, v]) => v !== undefined && v !== null && v !== "")
    .map(([k, v]) => `${k}=${String(v).replace(/\s+/g, "_").slice(0, 200)}`)
    .join(" ");
  console.warn(`Chat failure reason=${reason}${extra ? ` ${extra}` : ""}`);
}
