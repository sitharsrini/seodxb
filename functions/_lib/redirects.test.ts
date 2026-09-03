import assert from "node:assert/strict";
import test from "node:test";
import { isKept, mapRedirect, normalizePath, shouldRedirect } from "./redirects.ts";

test("core keepers are not redirected", () => {
  assert.equal(isKept("/aeo"), true);
  assert.equal(isKept("/geo"), true);
  assert.equal(isKept("/pricing"), true);
  assert.equal(shouldRedirect("/aeo"), false);
});

test("keyword landing pages are kept for indexing", () => {
  assert.equal(isKept("/seo-agency-dubai"), true);
  assert.equal(shouldRedirect("/seo-agency-dubai"), false);
  assert.equal(mapRedirect("/seo-agency-dubai"), "/seo-agency-dubai");
});

test("true synonym duplicates still 301", () => {
  assert.equal(mapRedirect("/seo-company-dubai"), "/seo-agency-dubai");
  assert.equal(mapRedirect("/best-seo-agency-dubai"), "/seo-agency-dubai");
});

test("trailing slash normalize", () => {
  assert.equal(normalizePath("/aeo/"), "/aeo");
  assert.equal(normalizePath("/"), "/");
});

test("generated and long-form blog articles are kept", () => {
  assert.equal(isKept("/blog/what-is-generative-engine-optimization-geo"), true);
  assert.equal(shouldRedirect("/blog/what-is-generative-engine-optimization-geo"), false);
  assert.equal(isKept("/blog/schema-markup-for-ai-search"), true);
  assert.equal(shouldRedirect("/blog"), false);
});
