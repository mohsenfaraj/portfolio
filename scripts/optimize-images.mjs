// scripts/optimize-images.js
import fs from "fs";
import path from "path";
import crypto from "crypto";
import sharp from "sharp";
import pc from "picocolors";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const CACHE_FILE = path.join(process.cwd(), ".image-cache.json");

// load cache
let cache = {};
if (fs.existsSync(CACHE_FILE)) {
  cache = JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"));
}

function hashFile(filePath) {
  const buffer = fs.readFileSync(filePath);
  return crypto.createHash("sha1").update(buffer).digest("hex");
}

async function processImage(filePath) {
  const relative = path.relative(PUBLIC_DIR, filePath);
  const ext = path.extname(filePath).toLowerCase();

  if (![".jpg", ".jpeg", ".png"].includes(ext)) return;

  const currentHash = hashFile(filePath);
  if (cache[relative] === currentHash) {
    console.log(pc.dim(`skip  ${relative} (unchanged)`));
    return;
  }

  const outputWebp = filePath.replace(ext, ".webp");

  console.log(pc.green(`optimize ${relative}`));

  await sharp(filePath)
    .resize({ width: 1024, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outputWebp);

  cache[relative] = currentHash;
}

function walk(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) walk(full);
    else processImage(full);
  }
}

(async () => {
  await walk(PUBLIC_DIR);

  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
  console.log(pc.cyan("done."));
})();
