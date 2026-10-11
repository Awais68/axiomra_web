// Writes public/chatbot/blob.svg, the shape-outside image for the chatbot
// page's integration row, from the same path the inline clipPath uses.
import { writeFileSync } from "node:fs";
import { BLOB_SIZE, blobPath } from "../src/components/chatbot/blob.js";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${BLOB_SIZE}" height="${BLOB_SIZE}" viewBox="0 0 ${BLOB_SIZE} ${BLOB_SIZE}"><path d="${blobPath()}" fill="#000"/></svg>\n`;
writeFileSync(new URL("../public/chatbot/blob.svg", import.meta.url), svg);
console.log("wrote public/chatbot/blob.svg");
