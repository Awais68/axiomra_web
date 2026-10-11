import { describe, expect, it } from "vitest";
import { prodWriteProblem } from "../scripts/dbGuard.js";

describe("script write guard", () => {
  it("refuses the production database without --prod", () => {
    expect(prodWriteProblem("axiomra", ["node", "x.js"])).toMatch(/Re-run with --prod/);
  });

  it("allows the production database with --prod", () => {
    expect(prodWriteProblem("axiomra", ["node", "x.js", "--prod"])).toBeNull();
  });

  it.each(["axiomra_dev", "axiomra-test", "test"])("allows %s", (name) => {
    expect(prodWriteProblem(name, ["node", "x.js"])).toBeNull();
  });
});
