import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og-image.png');

const W = 1200;
const H = 630;

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f6f1d8"/>
      <stop offset="100%" stop-color="#ede5c0"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <text x="80" y="280" font-family="system-ui, sans-serif" font-size="96" font-weight="900" fill="#1a1a1a">talz.net</text>
  <text x="80" y="360" font-family="system-ui, sans-serif" font-size="40" fill="#666">Networking &amp; infrastructure</text>
  <text x="80" y="410" font-family="system-ui, sans-serif" font-size="40" fill="#666">reference guides</text>
  <rect x="80" y="450" width="200" height="8" fill="#e8a838" rx="4"/>
  <text x="80" y="520" font-family="system-ui, sans-serif" font-size="24" fill="#999">Joven Talasan</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Created', out);
