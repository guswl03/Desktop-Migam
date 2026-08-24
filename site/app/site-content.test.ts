import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { features, platforms } from "./site-content";

describe("platform links", () => {
  it("routes visitors to the maintained Windows and macOS repositories", () => {
    expect(platforms.map(({ name, href }) => ({ name, href }))).toEqual([
      { name: "Windows", href: "https://github.com/guswl03/Desktop-Migam-Window" },
      { name: "macOS", href: "https://github.com/guswl03/Desktop-Migam-Mac" },
    ]);
  });
});

describe("feature visuals", () => {
  it("uses cutout compositions instead of full-window screenshots", () => {
    expect(features.map(({ number, visual }) => ({ number, visual }))).toEqual([
      { number: "01", visual: "focus" },
      { number: "02", visual: "walking" },
      { number: "03", visual: "collection" },
    ]);
  });
});

describe("gacha reward flow", () => {
  it("removes the hat and presents three non-overlapping reward steps", () => {
    const page = readFileSync(new URL("./page.tsx", import.meta.url), "utf8");
    const css = readFileSync(new URL("./collection-visuals.css", import.meta.url), "utf8");

    expect(page).not.toContain("santa-hat.png");
    expect(page).toContain('className="gacha-flow"');
    expect(page).toContain('className="gacha-step focus-reward-step"');
    expect(page).toContain('className="gacha-step ticket-draw-step"');
    expect(page).toContain('className="gacha-step item-reward-step"');
    expect(css).toMatch(/\.gacha-flow\s*\{[\s\S]*?grid-template-columns:\s*repeat\(3,\s*1fr\)/);
  });
});
