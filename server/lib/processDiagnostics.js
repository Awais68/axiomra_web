/**
 * Process-level diagnostics for the long-running server (index.js on Render).
 *
 * Every way the process can end leaves exactly one tagged line in the log, so
 * a restart can be told apart from the outside:
 *   [fatal]    an uncaught exception or unhandled rejection; we log, then exit 1
 *   [shutdown] Render (or anyone) sent SIGTERM/SIGINT; we close, then exit 0
 *   nothing    SIGKILL, which no handler can see: on Render that is almost
 *              always the memory limit, so the last [mem] line is the clue
 * A [mem] line every five minutes shows whether RSS climbs between restarts.
 */

const MEM_INTERVAL_MS = 5 * 60 * 1000;
// Render waits 30s after SIGTERM before it kills; leave margin for the log.
const SHUTDOWN_GRACE_MS = 10 * 1000;

const mb = (bytes) => Math.round(bytes / 1048576);

export function memorySnapshot() {
  const m = process.memoryUsage();
  const up = Math.round(process.uptime());
  return `rss=${mb(m.rss)}MB heapUsed=${mb(m.heapUsed)}MB heapTotal=${mb(m.heapTotal)}MB external=${mb(m.external)}MB uptime=${up}s`;
}

/**
 * Install the handlers. `server` is the http.Server from app.listen(), closed
 * on SIGTERM so in-flight requests finish. Returns the [mem] timer.
 */
export function installProcessDiagnostics(server, { log = console, exit = process.exit } = {}) {
  const fatal = (kind) => (err) => {
    log.error(`[fatal] ${kind}:`, err?.stack || err, `| ${memorySnapshot()}`);
    exit(1);
  };
  process.on("uncaughtException", fatal("uncaughtException"));
  process.on("unhandledRejection", fatal("unhandledRejection"));

  for (const signal of ["SIGTERM", "SIGINT"]) {
    process.once(signal, () => {
      log.log(`[shutdown] ${signal} received | ${memorySnapshot()}`);
      setTimeout(() => exit(0), SHUTDOWN_GRACE_MS).unref();
      server?.close(() => exit(0));
    });
  }

  log.log(`[mem] boot | ${memorySnapshot()}`);
  const timer = setInterval(() => log.log(`[mem] ${memorySnapshot()}`), MEM_INTERVAL_MS);
  timer.unref();
  return timer;
}
