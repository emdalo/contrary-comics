#!/usr/bin/env node
/**
 * Start the Vite dev server.
 *
 * The Grok preview (Linux) must bind 0.0.0.0:8080. Windows often refuses that
 * address (`EACCES` on 8080 — Hyper-V reserved ranges), so local Windows uses
 * 127.0.0.1:5173. Override with DEV_HOST / DEV_PORT.
 */
import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const isWin = process.platform === "win32";
const host = process.env.DEV_HOST ?? (isWin ? "127.0.0.1" : "0.0.0.0");
const port = process.env.DEV_PORT ?? (isWin ? "5173" : "8080");

const child = spawn(
  process.execPath,
  [join(root, "scripts/with-app-env.mjs"), "vite", "dev", "--host", host, "--port", port],
  { stdio: "inherit", cwd: root },
);

for (const signal of ["SIGINT", "SIGTERM", "SIGHUP"]) {
  process.on(signal, () => child.kill(signal));
}
child.on("exit", (code, signal) => {
  process.exit(signal ? 1 : code ?? 0);
});
child.on("error", (err) => {
  console.error("[dev] failed to start:", err?.message || err);
  process.exit(1);
});
