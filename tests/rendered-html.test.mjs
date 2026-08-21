import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, "http://localhost"), { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the leadership portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Utham Kumar Anugula Sethupathy \| Technology Program &amp; Product Leader<\/title>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/www\.uthamkumar\.info"\/>/);
  assert.match(html, /Utham Kumar Anugula Sethupathy · Atlanta, Georgia/);
  assert.match(html, /Professional Profile ↗/);
  assert.match(html, /href="https:\/\/www\.uthamkumaranugulasethupathy\.com\/"/);
  assert.match(html, /property="og:title" content="Utham Kumar Anugula Sethupathy \| Technology Program &amp; Product Leader"/);
  assert.match(html, /"@type":"Person"/);
  assert.match(html, /"name":"Utham Kumar Anugula Sethupathy"/);
  assert.match(html, /"sameAs":\["https:\/\/www\.uthamkumaranugulasethupathy\.com\/"/);
  assert.match(html, /Engineering Intelligence Lab/);
  assert.match(html, /Release Intelligence/);
  assert.match(html, /confident execution/);
  assert.match(html, /Ideas made tangible/);
  assert.match(html, /All data is synthetic/);
  assert.match(html, /Visa/);
  assert.match(html, /T-Mobile/);
  assert.match(html, /Verizon/);
  assert.match(html, /Speaking &amp; research/);
  assert.match(html, /Conf42 SRE/);
  assert.match(html, /Springer CCIS/);
  assert.doesNotMatch(html, /Wix|Building your site|react-loading-skeleton/i);
});

test("publishes canonical robots and sitemap URLs", async () => {
  const [robotsResponse, sitemapResponse] = await Promise.all([render("/robots.txt"), render("/sitemap.xml")]);
  assert.equal(robotsResponse.status, 200);
  assert.equal(sitemapResponse.status, 200);

  const [robots, sitemap] = await Promise.all([robotsResponse.text(), sitemapResponse.text()]);
  assert.match(robots, /Sitemap: https:\/\/www\.uthamkumar\.info\/sitemap\.xml/);
  assert.match(sitemap, /<loc>https:\/\/www\.uthamkumar\.info<\/loc>/);
  assert.doesNotMatch(sitemap, /https:\/\/uthamkumar\.com/);
});

test("keeps the portfolio and deployment contract explicit", async () => {
  const [page, releaseCase, layout, siteConfig, packageJson, vercelConfig, migrationAudit] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/work/release-intelligence/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/site.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../vercel.json", import.meta.url), "utf8"),
    readFile(new URL("../docs/MIGRATION_AUDIT.md", import.meta.url), "utf8"),
  ]);

  assert.match(page, /info@uthamkumar\.info/);
  assert.match(page, /linkedin\.com\/in\/kumar1612/);
  assert.match(page, /All data is synthetic/);
  assert.match(releaseCase, /release-intelligence\.uthamkumar\.info/);
  assert.match(releaseCase, /GitHub Enterprise/);
  assert.match(releaseCase, /synthetic data/);
  assert.match(siteConfig, /Utham Kumar Anugula Sethupathy/);
  assert.match(siteConfig, /Technology Program & Product Leader/);
  assert.match(layout, /AI-driven secure computing systems/);
  assert.match(packageJson, /"next": "16\.2\.6"/);
  assert.match(packageJson, /"node": "22\.x"/);
  assert.match(vercelConfig, /"framework": "nextjs"/);
  assert.match(migrationAudit, /placeholder CV/i);
});
