import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { features, platforms, showcaseMoments, storyMoments } from "./site-content";

describe("platform links", () => {
  it("routes visitors to the maintained Windows and macOS repositories", () => {
    expect(platforms.map(({ name, href }) => ({ name, href }))).toEqual([
      { name: "Windows", href: "https://github.com/guswl03/Desktop-Migam-Window" },
      { name: "macOS", href: "https://github.com/guswl03/Desktop-Migam-Mac" },
    ]);
  });

  it("offers a stable latest-release destination for each desktop platform", () => {
    expect(platforms.map(({ name, downloadHref, version }) => ({ name, downloadHref, version }))).toEqual([
      {
        name: "Windows",
        downloadHref: "https://github.com/guswl03/Desktop-Migam-Window/releases/latest",
        version: "v0.1.2",
      },
      {
        name: "macOS",
        downloadHref: "https://github.com/guswl03/Desktop-Migam-Mac/releases/latest",
        version: "v0.1.1",
      },
    ]);
  });
});

describe("product showcase", () => {
  it("presents real product moments in a deliberate narrative order", () => {
    expect(showcaseMoments.map(({ id, title }) => ({ id, title }))).toEqual([
      { id: "focus", title: "집중은 더 또렷하게" },
      { id: "play", title: "데스크톱은 더 생생하게" },
      { id: "reward", title: "끝낸 만큼 더 즐겁게" },
    ]);
  });
});

describe("Canva-inspired product story", () => {
  it("guides visitors through the app features in the same order as the product journey", () => {
    expect(storyMoments.map(({ id, title }) => ({ id, title }))).toEqual([
      { id: "focus", title: "뽀모도로 타이머" },
      { id: "jump", title: "점프와 댄스" },
      { id: "monitor", title: "CPU / MEMORY" },
      { id: "delivery", title: "이미지 배달" },
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

    expect(page).not.toContain('className="costumed-hat"');
    expect(page).not.toContain("./pet/idle.png");
    expect(page).toContain("/Desktop-Migam/pet/base-idle.png");
    expect(page).toContain('className="gacha-flow"');
    expect(page).toContain('className="gacha-step focus-reward-step"');
    expect(page).toContain('className="gacha-step ticket-draw-step"');
    expect(page).toContain('className="gacha-step item-reward-step"');
    expect(css).toMatch(/\.gacha-flow\s*\{[\s\S]*?grid-template-columns:\s*repeat\(3,\s*1fr\)/);
  });
});


describe("costume collection card", () => {
  it("shows costume items without a character preview", () => {
    const page = readFileSync(new URL("./page.tsx", import.meta.url), "utf8");

    expect(page).not.toContain('className="catalog-pet"');
    expect(page.match(/className="catalog-item/g)).toHaveLength(3);
    expect(page).toContain("/Desktop-Migam/pet/costume-beanie.png");
  });

  it("shows a correctly named santa hat card at the standard size", () => {
    const page = readFileSync(new URL("./page.tsx", import.meta.url), "utf8");

    expect(page).toContain("/Desktop-Migam/pet/costume-santa-hat.png");
    expect(page).not.toContain("헤드폰");
    expect(page).toContain('className="catalog-item catalog-item-owned"');
    expect(page).toContain("<span>산타 모자</span>");
  });


});






describe("beta release messaging", () => {
  it("clearly labels the site as a beta test rather than a finished release", () => {
    const page = readFileSync(new URL("./page.tsx", import.meta.url), "utf8");

    expect(page).toContain('className="beta-badge"');
    expect(page).toContain("BETA TEST");
    expect(page).toContain("현재 정식 출시 전 베타 테스트 버전입니다.");
  });
});
