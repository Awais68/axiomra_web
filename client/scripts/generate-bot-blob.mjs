// Writes public/bot-automation/blob.svg, the shape-outside image for the bot
// automation page's web-scraping row, from the same path the inline clipPath uses.
import { mkdirSync, writeFileSync } from "node:fs";
import { BLOB_SIZE, blobPath } from "../src/components/bot-automation/blob.js";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${BLOB_SIZE}" height="${BLOB_SIZE}" viewBox="0 0 ${BLOB_SIZE} ${BLOB_SIZE}"><path d="${blobPath()}" fill="#000"/></svg>\n`;
mkdirSync(new URL("../public/bot-automation/", import.meta.url), { recursive: true });
writeFileSync(new URL("../public/bot-automation/blob.svg", import.meta.url), svg);
console.log("wrote public/bot-automation/blob.svg");
