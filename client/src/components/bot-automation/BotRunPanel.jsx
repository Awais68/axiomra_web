import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bot, CheckCircle2, Loader2 } from "lucide-react";

const STEP_MS = 2200;
const VISIBLE = 4;
const BASE_DONE = 1284;

/**
 * A glass "bot runs" console. Every couple of seconds a new task drops in at
 * the top, its progress bar fills, and it settles as done while the older
 * runs slide down. Under reduced motion it shows a still list.
 */
export default function BotRunPanel({ runs, className = "" }) {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(VISIBLE - 1);

  useEffect(() => {
    if (reduced) return undefined;
    const t = setInterval(() => setStep((s) => s + 1), STEP_MS);
    return () => clearInterval(t);
  }, [reduced]);

  // Newest first: the run at `step` is in progress, the ones below are done.
  const rows = Array.from({ length: VISIBLE }, (_, i) => {
    const n = step - i;
    return {
      n,
      run: runs[((n % runs.length) + runs.length) % runs.length],
      live: i === 0 && !reduced,
    };
  });

  return (
    <div
      className={`ba-glass-dark overflow-hidden rounded-3xl text-left ${className}`}
      role="img"
      aria-label="Example log of automation bots completing tasks across business systems"
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="ba-clip-hex grid h-10 w-10 place-items-center bg-accent-vivid text-on-accent">
            <Bot size={20} aria-hidden="true" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">Ops Bot · live runs</p>
            <p className="flex items-center gap-1.5 text-xs text-white/60">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Running
              24/7
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="text-right leading-tight">
          <p className="font-mono text-lg font-semibold tabular-nums text-accent-vivid">
            {(BASE_DONE + step).toLocaleString("en-US")}
          </p>
          <p className="text-[0.65rem] uppercase tracking-[0.14em] text-white/50">tasks today</p>
        </div>
      </div>

      <ul aria-hidden="true" className="flex h-[17rem] flex-col gap-2.5 overflow-hidden px-4 py-4">
        <AnimatePresence initial={false} mode="popLayout">
          {rows.map(({ n, run, live }) => (
            <motion.li
              key={n}
              layout
              initial={{ opacity: 0, y: -18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 360, damping: 30 }}
              className="relative overflow-hidden rounded-2xl bg-white/[0.06] px-4 py-3"
            >
              <div className="flex items-center gap-3">
                {live ? (
                  <Loader2 size={18} className="shrink-0 animate-spin text-accent-vivid" />
                ) : (
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-400" />
                )}
                <span className="min-w-0 flex-1 truncate text-sm text-white">{run.task}</span>
                <span className="shrink-0 rounded-full border border-white/15 px-2 py-0.5 font-mono text-[0.65rem] text-white/60">
                  {run.system}
                </span>
              </div>
              {live && (
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-accent-vivid"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: (STEP_MS - 300) / 1000, ease: "linear" }}
                />
              )}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
