import { describe, expect, it } from "vitest";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

// Handlers on `process` would leak into the test worker, so each case runs in
// its own child process with a real http server.
const MODULE = fileURLToPath(new URL("../lib/processDiagnostics.js", import.meta.url));

function runChild(body, { signal } = {}) {
  const script = `
    import http from "node:http";
    import { installProcessDiagnostics } from ${JSON.stringify(MODULE)};
    const server = http.createServer().listen(0, () => {
      installProcessDiagnostics(server);
      console.log("ready");
      ${body}
    });
  `;
  return new Promise((resolve) => {
    const child = spawn(process.execPath, ["--input-type=module", "-e", script]);
    let out = "";
    const collect = (chunk) => {
      out += chunk;
      if (signal && out.includes("ready") && !child.signalSent) {
        child.signalSent = true;
        child.kill(signal);
      }
    };
    child.stdout.on("data", collect);
    child.stderr.on("data", collect);
    child.on("exit", (code) => resolve({ code, out }));
  });
}

describe("process diagnostics", () => {
  it("logs an uncaught exception with memory, then exits 1", async () => {
    const { code, out } = await runChild(`setTimeout(() => { throw new Error("boom"); });`);
    expect(code).toBe(1);
    expect(out).toMatch(/\[fatal\] uncaughtException: Error: boom/);
    expect(out).toMatch(/rss=\d+MB/);
  });

  it("logs an unhandled rejection, then exits 1", async () => {
    const { code, out } = await runChild(`Promise.reject(new Error("nope"));`);
    expect(code).toBe(1);
    expect(out).toMatch(/\[fatal\] unhandledRejection: Error: nope/);
  });

  it("logs SIGTERM and exits 0 once the server closes", async () => {
    const { code, out } = await runChild("", { signal: "SIGTERM" });
    expect(code).toBe(0);
    expect(out).toMatch(/\[shutdown\] SIGTERM received \| rss=\d+MB/);
  });

  it("logs memory at boot", async () => {
    const { out } = await runChild("process.exit(0);");
    expect(out).toMatch(/\[mem\] boot \| rss=\d+MB heapUsed=\d+MB .* uptime=\d+s/);
  });
});
