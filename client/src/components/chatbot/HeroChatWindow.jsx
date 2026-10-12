import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { TbMessageChatbot, TbSend2 } from "react-icons/tb";

const TYPING_MS = 1300;
const READ_MS = 1500;
const RESTART_MS = 3800;

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1 py-1" aria-label="Assistant is typing">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-white/70"
          animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </span>
  );
}

/**
 * A glass chat window that plays a scripted exchange on a loop: the user
 * message lands, the bot "types", then answers. Under reduced motion the
 * whole exchange is shown at once and nothing moves.
 */
export default function HeroChatWindow({ conversation, className = "" }) {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(reduced ? conversation.length : 0);

  useEffect(() => {
    if (reduced) return undefined;
    if (shown >= conversation.length) {
      const t = setTimeout(() => setShown(0), RESTART_MS);
      return () => clearTimeout(t);
    }
    const next = conversation[shown];
    if (next.from === "bot") {
      const t = setTimeout(() => setShown((n) => n + 1), TYPING_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 700 : READ_MS);
    return () => clearTimeout(t);
  }, [shown, conversation, reduced]);

  const messages = conversation.slice(0, shown);
  // The bot "types" for as long as its turn is the next one due.
  const typing = !reduced && conversation[shown]?.from === "bot";

  return (
    <div
      className={`cb-glass-dark overflow-hidden rounded-3xl text-left ${className}`}
      role="img"
      aria-label="Example conversation with an Axiomra-built support chatbot"
    >
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-vivid text-on-accent">
          <TbMessageChatbot size={20} aria-hidden="true" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-white">Support Assistant</p>
          <p className="flex items-center gap-1.5 text-xs text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online · replies instantly
          </p>
        </div>
      </div>

      <div aria-hidden="true" className="flex h-[17.5rem] flex-col justify-end gap-3 px-5 py-4">
        <AnimatePresence initial={false} mode="popLayout">
          {messages.map((m, i) => (
            <motion.div
              key={`${i}-${m.text}`}
              layout
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                m.from === "user"
                  ? "self-end rounded-br-md bg-accent-vivid text-on-accent"
                  : "self-start rounded-bl-md bg-white/10 text-white"
              }`}
            >
              {m.text}
            </motion.div>
          ))}
          {typing && (
            <motion.div
              key="typing"
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="self-start rounded-2xl rounded-bl-md bg-white/10 px-4 py-2"
            >
              <TypingDots />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        aria-hidden="true"
        className="flex items-center gap-3 border-t border-white/10 px-5 py-3.5"
      >
        <span className="flex-1 truncate text-sm text-white/40">Ask anything…</span>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-accent-vivid">
          <TbSend2 size={16} />
        </span>
      </div>
    </div>
  );
}
