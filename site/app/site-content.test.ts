import { describe, expect, it } from "vitest";
import { platforms } from "./site-content";

describe("platform links", () => {
  it("routes visitors to the maintained Windows and macOS repositories", () => {
    expect(platforms.map(({ name, href }) => ({ name, href }))).toEqual([
      { name: "Windows", href: "https://github.com/guswl03/Desktop-Migam-Window" },
      { name: "macOS", href: "https://github.com/ariha1982/Desktop-Migam-Mac" },
    ]);
  });
});