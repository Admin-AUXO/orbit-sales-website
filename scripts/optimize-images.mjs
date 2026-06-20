import {
  readdirSync,
  statSync,
  renameSync,
  unlinkSync,
  readFileSync,
} from "node:fs";
import { join, extname, dirname, basename } from "node:path";
import sharp from "sharp";

const BRAND = join(process.cwd(), "public/brand");

const rules = [
  { dir: "news", maxW: 1600, quality: 78 },
  { dir: "team", maxW: 640, quality: 82 },
  { dir: "metrics", maxW: 1200, quality: 82 },
  { dir: "device", maxW: 1400, quality: 80 },
  { dir: "partners", maxW: 400, quality: 85 },
  { dir: "press", maxW: 400, quality: 85 },
  { dir: "hero", maxW: 1100, quality: 80 },
  { dir: "report", maxW: 1800, quality: 80 },
];

const exts = new Set([".png", ".jpg", ".jpeg", ".webp"]);

async function optimize(file, maxW, quality) {
  const ext = extname(file).toLowerCase();
  if (!exts.has(ext)) return null;
  const before = statSync(file).size;
  const input = readFileSync(file);
  const tmp = join(dirname(file), `__opt_${basename(file, ext)}.webp`);
  await sharp(input)
    .resize({ width: maxW, withoutEnlargement: true })
    .webp({ quality })
    .toFile(tmp);
  const out = join(dirname(file), `${basename(file, ext)}.webp`);
  unlinkSync(file);
  renameSync(tmp, out);
  const after = statSync(out).size;
  return { name: basename(out), before, after };
}

const only = process.argv.slice(2);
for (const { dir, maxW, quality } of rules) {
  if (only.length && !only.includes(dir)) continue;
  const full = join(BRAND, dir);
  let files;
  try {
    files = readdirSync(full);
  } catch {
    continue;
  }
  console.log(`\n${dir}/ (max ${maxW}px, q${quality}):`);
  for (const f of files) {
    const path = join(full, f);
    if (!statSync(path).isFile()) continue;
    const r = await optimize(path, maxW, quality);
    if (r) {
      const kb = (n) => (n / 1024).toFixed(0);
      console.log(`  ${r.name}: ${kb(r.before)} KB → ${kb(r.after)} KB`);
    }
  }
}
console.log("\nDone.");
