/**
 * Output filter for the chat assistant's replies.
 *
 * The prompt asks for no dashes and no headings, but a prompt is a request,
 * not a guarantee. Every reply passes through here before it reaches the
 * visitor or the stored history:
 *   - an em dash (with any spaces around it) becomes ", "
 *   - an en dash becomes "-"
 *   - a Markdown heading marker at the start of a line is dropped (the widget
 *     renders **bold** and "- " bullets, but would show "#" literally)
 */

const EM_DASH = /[ \t]*—[ \t]*/g;
const EN_DASH = /–/g;
// ", " left in front of punctuation or a line end by a replaced em dash.
const COMMA_BEFORE_PUNCT = /, ([.,;:!?)])/g;
const COMMA_BEFORE_EOL = /, (?=\n|$)/g;
const HEADING = /\n#{1,6}[ \t]+/g;

// Marks "not at a line start" in front of a segment; matches none of the
// patterns above.
const MID_LINE = "\u0000";

function clean(segment, lineStart) {
  return (lineStart ? "\n" : MID_LINE)
    .concat(segment)
    .replace(HEADING, "\n")
    .replace(EM_DASH, ", ")
    .replace(EN_DASH, "-")
    .replace(COMMA_BEFORE_PUNCT, "$1")
    .replace(COMMA_BEFORE_EOL, ",")
    .slice(1);
}

/** Clean a complete reply. */
export function cleanReply(text) {
  return clean(text, true);
}

/**
 * Streaming version of cleanReply. A chunk can end in the middle of something
 * the next chunk completes ("word " + "— next", "\n#" + "# Title"), so the
 * tail that could still change is held back until more text arrives.
 *
 *   const filter = createReplyFilter();
 *   for (const chunk of stream) send(filter.push(chunk));
 *   send(filter.flush());
 */
export function createReplyFilter() {
  let pending = "";
  let lineStart = true;

  const emit = (segment) => {
    if (!segment) return "";
    const out = clean(segment, lineStart);
    lineStart = segment.endsWith("\n");
    return out;
  };

  return {
    push(chunk) {
      const text = pending + chunk;
      // Trailing spaces, or an em dash with its spaces, wait for the next
      // character so the spacing and punctuation around them come out right.
      let cut = /[ \t]*(?:—[ \t]*)?$/.exec(text).index;
      // "#" marks at a line start may still become a heading.
      const hashes = /(?:^|\n)(#{1,6}[ \t]*)$/.exec(text);
      if (hashes && (hashes.index > 0 || text[0] === "\n" || lineStart)) {
        cut = Math.min(cut, text.length - hashes[1].length);
      }
      pending = text.slice(cut);
      return emit(text.slice(0, cut));
    },
    flush() {
      const rest = pending;
      pending = "";
      return emit(rest);
    },
  };
}
