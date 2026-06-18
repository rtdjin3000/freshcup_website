import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const SRC = path.join(process.cwd(), "public", "images", "src");
const OUT = path.join(process.cwd(), "public", "images");
const MAX_WIDTH = 1400;
const QUALITY = 80;

async function run() {
  if (!existsSync(SRC)) {
    console.error("No source folder:", SRC);
    process.exit(1);
  }
  await mkdir(OUT, { recursive: true });
  const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f));

  for (const file of files) {
    const inPath = path.join(SRC, file);
    const base = file.replace(/\.(jpe?g|png)$/i, "");
    const isLogo = /logo/i.test(base);
    const outPath = path.join(OUT, isLogo ? `${base}.png` : `${base}.jpg`);

    let img = sharp(inPath).rotate();
    const meta = await img.metadata();
    if ((meta.width || 0) > MAX_WIDTH) {
      img = img.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    if (isLogo) {
      await img.png({ quality: 90, compressionLevel: 9 }).toFile(outPath);
    } else {
      await img
        .flatten({ background: "#ffffff" })
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toFile(outPath);
    }
    console.log("✓", path.basename(outPath));
  }
  console.log("\nOptimized", files.length, "images.");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
