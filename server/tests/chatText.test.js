import { describe, expect, it } from "vitest";
import { cleanReply, createReplyFilter } from "../lib/chatText.js";

const streamed = (chunks) => {
  const filter = createReplyFilter();
  return chunks.map((c) => filter.push(c)).join("") + filter.flush();
};

describe("cleanReply", () => {
  it.each([
    ["We build agents — and the apps around them.", "We build agents, and the apps around them."],
    ["Fast—reliable—cheap", "Fast, reliable, cheap"],
    ["Pricing is $11k–$21k.", "Pricing is $11k-$21k."],
    ["It ends here —.", "It ends here."],
    ["One —\nTwo", "One,\nTwo"],
    ["## Services\nWe do AI.", "Services\nWe do AI."],
    ["Intro\n### Pricing\nRanges", "Intro\nPricing\nRanges"],
    ["Use C# and #hashtags", "Use C# and #hashtags"],
    ["- **Bold** stays for the widget", "- **Bold** stays for the widget"],
  ])("%j", (input, output) => {
    expect(cleanReply(input)).toBe(output);
  });
});

describe("createReplyFilter", () => {
  const samples = [
    "We build agents — and the apps around them. Costs are $11k–$21k — roughly.",
    "## Services\nWe do AI —\n### Pricing\n- Ranges — from discovery",
    "Plain text with no dashes at all.",
  ];

  it("matches cleanReply for every two-way split", () => {
    for (const text of samples) {
      for (let i = 0; i <= text.length; i += 1) {
        expect(streamed([text.slice(0, i), text.slice(i)])).toBe(cleanReply(text));
      }
    }
  });

  it("matches cleanReply when streamed one character at a time", () => {
    for (const text of samples) expect(streamed([...text])).toBe(cleanReply(text));
  });

  it("handles a dash split from its spaces across chunks", () => {
    expect(streamed(["word ", "—", " next"])).toBe("word, next");
    expect(streamed(["\n#", "# Title"])).toBe("\nTitle");
  });
});
