import { describe, expect, test } from "bun:test";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

function sourceFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? sourceFiles(path) : path.endsWith(".tsx") ? [path] : [];
  });
}

const sources = sourceFiles("src").map((path) => ({ path, text: readFileSync(path, "utf8") }));

describe("Single contact number", () => {
  test("every direct call uses +55 11 92746-8278", () => {
    const links = sources.flatMap(({ text }) => [...text.matchAll(/tel:([^'"\s]+)/g)].map((match) => match[1]));
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) expect(link).toBe("+5511927468278");
  });

  test("every WhatsApp destination uses 5511927468278", () => {
    const links = sources.flatMap(({ text }) => [...text.matchAll(/wa\.me\/(\d+)/g)].map((match) => match[1]));
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) expect(link).toBe("5511927468278");
    const floating = readFileSync("src/components/WhatsAppButton.tsx", "utf8");
    expect(floating.match(/const phoneNumber = "(\d+)"/)?.[1]).toBe("5511927468278");
  });

  test("all structured telephone values use the same international number", () => {
    const schema = readFileSync("src/components/SEO/StructuredData.tsx", "utf8");
    const numbers = [...schema.matchAll(/"telephone":\s*"([^"]+)"/g)].map((match) => match[1]);
    expect(numbers.length).toBeGreaterThan(0);
    for (const number of numbers) expect(number).toBe("+5511927468278");
  });
});