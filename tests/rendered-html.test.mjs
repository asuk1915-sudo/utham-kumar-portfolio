import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the leadership portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Utham Kumar/);
  assert.match(html, /Engineering Intelligence Lab/);
  assert.match(html, /Release Intelligence/);
  assert.match(html, /confident execution/);
  assert.match(html, /Ideas made tangible/);
  assert.match(html, /All data is synthetic/);
  assert.doesNotMatch(html, /Wix|Building your site|react-loading-skeleton/i);
});

test("keeps the portfolio and deployment contract explicit", async () => {
  const [page, releaseCase, layout, packageJson, vercelConfig, migrationAudit] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/work/release-intelligence/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../vercel.json", import.meta.url), "utf8"),
    readFile(new URL("../docs/MIGRATION_AUDIT.md", import.meta.url), "utf8"),
  ]);

  assert.match(page, /info@uthamkumar\.info/);
  assert.match(page, /linkedin\.com\/in\/kumar1612/);
  assert.match(page, /All data is synthetic/);
  assert.match(releaseCase, /release-intelligence\.uthamkumar\.info/);
  assert.match(layout, /Technology Program & Product Leader/);
  assert.match(packageJson, /"next": "16\.2\.6"/);
  assert.match(packageJson, /"node": "22\.x"/);
  assert.match(vercelConfig, /"framework": "nextjs"/);
  assert.match(migrationAudit, /placeholder CV/i);
});
