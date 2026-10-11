/**
 * Shared guard for the hand-run scripts that write to MongoDB. Call it right
 * after connectDB() and before the first write: it prints where the writes
 * will land, and refuses the production database unless --prod was passed.
 *
 * The name comes from the live connection rather than from parsing MONGO_URI,
 * so a URI with no path (which mongoose sends to "test") or a dbName option
 * is reported as what it really is.
 */
import mongoose from "mongoose";

export const PROD_DB_NAME = "axiomra";

export function prodWriteProblem(dbName, argv = process.argv) {
  if (dbName !== PROD_DB_NAME || argv.includes("--prod")) return null;
  return `Refusing to write to the production database "${PROD_DB_NAME}". Re-run with --prod if that is really the target.`;
}

export function guardWriteTarget({ dryRun = false, argv = process.argv } = {}) {
  const { host, name } = mongoose.connection;
  console.log(`\n  Target database: ${name} on ${host}${dryRun ? " (dry run, no writes)" : ""}`);
  if (dryRun) return;
  const problem = prodWriteProblem(name, argv);
  if (problem) throw new Error(problem);
}
