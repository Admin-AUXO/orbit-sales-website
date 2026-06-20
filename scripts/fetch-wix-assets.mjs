import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const manifestPath = process.argv[2] ?? join(process.cwd(), "scripts/wix-assets.json");
const destRoot = join(process.cwd(), "public/brand");
const items = JSON.parse(readFileSync(manifestPath, "utf8"));

async function download(id, out, attempt = 1) {
  const url = `https://static.wixstatic.com/media/${id}`;
  const target = join(destRoot, out);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, buf);
    console.log(`✓ ${out} (${(buf.length / 1024).toFixed(0)} KB)`);
  } catch (err) {
    if (attempt < 4) {
      await new Promise((r) => setTimeout(r, 400 * attempt));
      return download(id, out, attempt + 1);
    }
    console.error(`✗ ${out} — ${err.message}`);
  }
}

for (const { id, out } of items) {
  await download(id, out);
}
console.log("Done.");
