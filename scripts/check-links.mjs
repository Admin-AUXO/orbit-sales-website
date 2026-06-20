import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const APP = join(ROOT, "app");
const SCAN_DIRS = ["app", "components", "content"];

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function routeFromPageFile(file) {
  const rel = relative(APP, file).replace(/\\/g, "/");
  if (!rel.endsWith("page.tsx")) return null;
  let route = "/" + rel.replace(/\/?page\.tsx$/, "");
  route = route.replace(/\/$/, "") || "/";
  return route;
}

const realRoutes = new Set();
const dynamicRoutes = [];
for (const file of walk(APP)) {
  const route = routeFromPageFile(file);
  if (!route) continue;
  if (route.includes("[")) dynamicRoutes.push(new RegExp("^" + route.replace(/\[[^\]]+\]/g, "[^/]+") + "$"));
  else realRoutes.add(route);
}

const disabledSrc = readFileSync(join(ROOT, "lib/disabled-routes.ts"), "utf8");
const disabledPrefixes = [...disabledSrc.matchAll(/"(\/[a-z-]+)"/g)].map((m) => m[1]);

const isDisabled = (path) =>
  disabledPrefixes.some((p) => path === p || path.startsWith(p + "/"));
const isReal = (path) =>
  realRoutes.has(path) || dynamicRoutes.some((re) => re.test(path));

const internal = new Map();
const external = new Set();
const hrefRe = /href=(?:"([^"]+)"|\{`([^`]+)`\}|\{"([^"]+)"\})/g;

for (const dir of SCAN_DIRS) {
  for (const file of walk(join(ROOT, dir))) {
    if (!/\.(tsx?|json)$/.test(file)) continue;
    const src = readFileSync(file, "utf8");
    for (const m of src.matchAll(hrefRe)) {
      const href = m[1] ?? m[2] ?? m[3];
      if (!href) continue;
      if (/^https?:\/\//.test(href)) external.add(href);
      else if (href.startsWith("/") && !href.startsWith("//")) {
        const path = href.split(/[?#]/)[0].replace(/\/$/, "") || "/";
        if (!internal.has(path)) internal.set(path, new Set());
        internal.get(path).add(relative(ROOT, file).replace(/\\/g, "/"));
      }
    }
  }
}

const broken = [];
const disabledLinks = [];
for (const [path, files] of internal) {
  if (path.startsWith("/brand/") || path.includes(".")) continue;
  if (!isReal(path) && !isDisabled(path)) broken.push([path, [...files]]);
  else if (isDisabled(path)) disabledLinks.push([path, [...files]]);
}

console.log(`Routes: ${realRoutes.size} static, ${dynamicRoutes.length} dynamic`);
console.log(`Internal link targets: ${internal.size} | External: ${external.size}\n`);

if (broken.length) {
  console.log("❌ BROKEN internal links (no matching route):");
  for (const [p, f] of broken) console.log(`  ${p}  ←  ${f.join(", ")}`);
} else console.log("✓ No broken internal links");

if (disabledLinks.length) {
  console.log("\n⚠️  Links to DISABLED (404) routes:");
  for (const [p, f] of disabledLinks) console.log(`  ${p}  ←  ${f.join(", ")}`);
} else console.log("✓ No links to disabled routes");

console.log("\nExternal links (review manually):");
for (const e of [...external].sort()) console.log(`  ${e}`);

process.exit(broken.length ? 1 : 0);
