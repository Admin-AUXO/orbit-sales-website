import { execFileSync } from "node:child_process";
import { readdirSync, statSync, renameSync, existsSync } from "node:fs";
import { join } from "node:path";
import ffmpeg from "ffmpeg-static";

const DIR = join(process.cwd(), "public/brand/video");
const kb = (n) => (n / 1024).toFixed(0);

for (const file of readdirSync(DIR)) {
  if (!file.endsWith(".mp4")) continue;
  const src = join(DIR, file);
  const before = statSync(src).size;
  const tmp = join(DIR, `__opt_${file}`);

  // Re-encode H.264: cap height 1080, CRF 30, strip audio, web-faststart.
  execFileSync(ffmpeg, [
    "-y", "-i", src,
    "-vf", "scale=-2:'min(1080,ih)'",
    "-c:v", "libx264", "-crf", "30", "-preset", "slow",
    "-an", "-movflags", "+faststart",
    tmp,
  ], { stdio: "ignore" });

  if (existsSync(tmp)) {
    renameSync(tmp, src);
    const after = statSync(src).size;
    console.log(`${file}: ${kb(before)} KB → ${kb(after)} KB`);
  }
}
console.log("Done.");
