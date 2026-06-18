// Generates a printable QR code that points to the Fresh Cup Google review link.
// Usage: npm run review-qr
// After updating `reviewUrl` in data/restaurant.ts, re-run this to refresh the QR.
import QRCode from "qrcode";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { readFileSync } from "node:fs";

const root = resolve(process.cwd());
const dataFile = resolve(root, "data/restaurant.ts");

// Pull reviewUrl straight from data/restaurant.ts so the QR always matches the site.
const source = readFileSync(dataFile, "utf8");
const match = source.match(/reviewUrl:\s*\n?\s*"([^"]+)"/);
const reviewUrl = match?.[1];

if (!reviewUrl) {
  console.error("Could not find reviewUrl in data/restaurant.ts");
  process.exit(1);
}

const out = resolve(root, "public/images/review-qr.png");
await mkdir(dirname(out), { recursive: true });

await QRCode.toFile(out, reviewUrl, {
  type: "png",
  width: 1200,
  margin: 2,
  color: {
    dark: "#1f3d2b", // brand green dark
    light: "#ffffff",
  },
});

console.log("QR code generated:");
console.log("  URL :", reviewUrl);
console.log("  File:", out);
