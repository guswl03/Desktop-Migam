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
