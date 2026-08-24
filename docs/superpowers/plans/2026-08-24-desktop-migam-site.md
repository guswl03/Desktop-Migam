# Desktop Migam Landing Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a program-first Desktop Migam landing page that introduces the pet experience and routes visitors to the Windows or macOS repository.

**Architecture:** A single static Vite + TypeScript page renders semantic HTML, CSS-driven product mockups, and a small progressive-enhancement script. Existing Gamjabot PNG frames are copied into the site as optimized public assets, while a GitHub Actions workflow builds and deploys `dist/` to GitHub Pages.

**Tech Stack:** Vite, TypeScript, Vitest, CSS, GitHub Actions, GitHub Pages

**Spec:** `docs/superpowers/specs/2026-08-24-desktop-migam-site-design.md`

## Global Constraints

- Deploy from `main` to the `Desktop-Migam` GitHub Pages project URL.
- Keep the site static: no server, account, database, analytics, or persistence.
- Reuse existing Gamjabot art; do not create substitute character art.
- Preserve readable content and platform links without JavaScript.
- Respect `prefers-reduced-motion` and prevent horizontal overflow at mobile widths.
- Do not add direct installer links until corresponding GitHub Releases exist.

---

### Task 1: Scaffold the Static Site and Contract Tests

**Files:**
- Create: `package.json`
- Create: `package-lock.json`
- Create: `tsconfig.json`
- Create: `vite.config.ts`
- Create: `index.html`
- Create: `src/main.ts`
- Create: `src/style.css`
- Create: `src/site-content.ts`
- Create: `src/site-content.test.ts`

**Interfaces:**
- Produces: `platforms: readonly PlatformLink[]`, where `PlatformLink` contains `name`, `label`, `href`, and `detail`.
- Produces: Vite build output in `dist/` with base path `/Desktop-Migam/`.

- [ ] **Step 1: Scaffold the new site**

Run the approved site initializer in the repository root, install dependencies, and retain the generated Vite package structure. Configure these scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "test": "vitest run",
    "typecheck": "tsc --noEmit"
  }
}
```

- [ ] **Step 2: Write the failing platform-link test**

```ts
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
```

- [ ] **Step 3: Run the test and confirm the missing module failure**

Run: `npm test -- --run src/site-content.test.ts`

Expected: FAIL because `src/site-content.ts` does not exist.

- [ ] **Step 4: Implement the typed platform data**

```ts
export interface PlatformLink {
  name: "Windows" | "macOS";
  label: string;
  href: string;
  detail: string;
}

export const platforms = [
  {
    name: "Windows",
    label: "Windows 버전 보기",
    href: "https://github.com/guswl03/Desktop-Migam-Window",
    detail: "Windows 11 · Tauri 2 + Rust",
  },
  {
    name: "macOS",
    label: "macOS 버전 보기",
    href: "https://github.com/ariha1982/Desktop-Migam-Mac",
    detail: "macOS · Tauri 2 + Rust",
  },
] as const satisfies readonly PlatformLink[];
```

- [ ] **Step 5: Configure GitHub Pages asset paths**

```ts
import { defineConfig } from "vite";

export default defineConfig({
  base: "/Desktop-Migam/",
});
```

- [ ] **Step 6: Run the focused test and typecheck**

Run: `npm test -- --run src/site-content.test.ts && npm run typecheck`

Expected: one passing test and no TypeScript errors.

- [ ] **Step 7: Commit the scaffold and contract**

```bash
git add package.json package-lock.json tsconfig.json vite.config.ts index.html src/main.ts src/style.css src/site-content.ts src/site-content.test.ts
git commit -m "feat: scaffold Desktop Migam landing site"
```

### Task 2: Build the Program-First Landing Experience

**Files:**
- Modify: `src/main.ts`
- Modify: `src/style.css`
- Modify: `src/site-content.ts`
- Create: `public/assets/gamjabot-idle.png`
- Create: `public/assets/gamjabot-walk-0.png`
- Create: `public/assets/gamjabot-walk-1.png`

**Interfaces:**
- Consumes: `platforms` from `src/site-content.ts`.
- Produces: semantic sections with IDs `features`, `gamcha`, and `platforms`.
- Produces: `.pet-stage[data-frame]` for animation enhancement.

- [ ] **Step 1: Copy approved Gamjabot frames**

Copy one idle frame and two adjacent walk frames from the maintained Windows repository's `images/characters/gamjabot/pack/` directory into `public/assets/`, preserving transparency. Inspect the copied images and use only frames that show the intended base character clearly.

- [ ] **Step 2: Add a failing structural test**

Extend `src/site-content.test.ts` to require five feature entries with stable IDs:

```ts
expect(features.map((feature) => feature.id)).toEqual([
  "focus",
  "todo",
  "gamcha",
  "delivery",
  "guard",
]);
```

- [ ] **Step 3: Run the structural test and confirm failure**

Run: `npm test -- --run src/site-content.test.ts`

Expected: FAIL because `features` is not exported.

- [ ] **Step 4: Implement product-specific content**

Add a typed `features` collection containing Korean titles and concise descriptions for focus timer, todo linkage, GAMCHA collection, photo delivery/system response, and safe focus guard.

- [ ] **Step 5: Implement the semantic page**

Render these elements in `src/main.ts`:

```html
<header class="site-header">...</header>
<main>
  <section class="hero">...</section>
  <section id="features" class="features">...</section>
  <section id="gamcha" class="gamcha-showcase">...</section>
  <section id="platforms" class="platforms">...</section>
</main>
<footer class="site-footer">...</footer>
```

The hero must include the approved headline, a timer speech bubble, ticket counter, and Gamjabot image. External platform links use `target="_blank" rel="noreferrer"`.

- [ ] **Step 6: Implement the visual system**

In `src/style.css`, define:

- debugger-inspired borders, status bars, monospaced labels, and readable Korean body typography;
- bright system blue, ticket yellow, charcoal panels, and GAMCHA accent colors;
- CSS-only mockups for timer, todo, collection, delivery, and focus guard;
- a responsive card grid and single-column mobile layout;
- visible `:focus-visible` states and `overflow-x: clip` protection.

- [ ] **Step 7: Verify content and production build**

Run: `npm test -- --run && npm run build`

Expected: all tests pass and Vite creates `dist/index.html` plus hashed assets.

- [ ] **Step 8: Commit the landing page**

```bash
git add src public/assets
git commit -m "feat: build Desktop Migam product landing page"
```

### Task 3: Add Motion, Accessibility, and Social Metadata

**Files:**
- Modify: `src/main.ts`
- Modify: `src/style.css`
- Modify: `index.html`
- Create: `src/motion.ts`
- Create: `src/motion.test.ts`
- Create: `public/og.png`

**Interfaces:**
- Produces: `frameAt(elapsedMilliseconds: number, frameCount: number, frameDuration?: number): number`.
- Consumes: `.pet-stage[data-frame]` and swaps only the existing local frame URLs.

- [ ] **Step 1: Write the failing animation-frame test**

```ts
import { describe, expect, it } from "vitest";
import { frameAt } from "./motion";

describe("frameAt", () => {
  it("cycles through frames at a stable interval", () => {
    expect(frameAt(0, 2, 180)).toBe(0);
    expect(frameAt(180, 2, 180)).toBe(1);
    expect(frameAt(360, 2, 180)).toBe(0);
  });
});
```

- [ ] **Step 2: Run the test and confirm failure**

Run: `npm test -- --run src/motion.test.ts`

Expected: FAIL because `src/motion.ts` does not exist.

- [ ] **Step 3: Implement the animation helper**

```ts
export function frameAt(
  elapsedMilliseconds: number,
  frameCount: number,
  frameDuration = 180,
): number {
  if (frameCount <= 0) return 0;
  return Math.floor(Math.max(0, elapsedMilliseconds) / frameDuration) % frameCount;
}
```

- [ ] **Step 4: Add progressive motion**

Use `requestAnimationFrame` to cycle the two walk images and pause the loop when `matchMedia("(prefers-reduced-motion: reduce)").matches` is true or the document is hidden. Keep the idle image as the no-JavaScript fallback.

- [ ] **Step 5: Add reduced-motion and touch behavior**

Disable walking, floating, confetti, and marquee animation inside `@media (prefers-reduced-motion: reduce)`. Ensure the navigation and platform cards remain usable at 320px width.

- [ ] **Step 6: Add site metadata**

Set the exact page title `Desktop Migam — 집중을 돕는 데스크톱 펫`, a Korean description, canonical project URL, Open Graph fields, and X card fields in `index.html`. Generate and inspect one branded `public/og.png` that matches the site's approved visual direction and contains legible `Desktop Migam` text.

- [ ] **Step 7: Run tests and build**

Run: `npm test -- --run && npm run typecheck && npm run build`

Expected: all checks pass with `public/og.png` copied into `dist/`.

- [ ] **Step 8: Commit motion and metadata**

```bash
git add src/motion.ts src/motion.test.ts src/main.ts src/style.css index.html public/og.png
git commit -m "feat: add accessible motion and site metadata"
```

### Task 4: Configure and Verify GitHub Pages Deployment

**Files:**
- Create: `.github/workflows/pages.yml`
- Modify: `README.md`

**Interfaces:**
- Consumes: `npm run build` output at `dist/`.
- Produces: GitHub Pages deployment on pushes to `main` and manual dispatch.

- [ ] **Step 1: Add the Pages workflow**

Create `.github/workflows/pages.yml` using `actions/checkout@v4`, `actions/setup-node@v4` with Node 22 and npm cache, `npm ci`, `npm run build`, `actions/configure-pages@v5`, `actions/upload-pages-artifact@v3` with `path: dist`, and `actions/deploy-pages@v4`. Grant `pages: write` and `id-token: write`, and use the `github-pages` environment.

- [ ] **Step 2: Update the repository README**

Keep the Windows/macOS buttons and add the public site URL, local commands, deployment behavior, and the fact that installers live in each platform repository's Releases.

- [ ] **Step 3: Validate the deployment inputs**

Run:

```bash
npm ci
npm test -- --run
npm run typecheck
npm run build
```

Expected: zero failures and a populated `dist/` directory.

- [ ] **Step 4: Inspect generated links and repository cleanliness**

Verify `dist/index.html` references `/Desktop-Migam/` assets, both repository URLs appear in the generated JavaScript, `git diff --check` reports no errors, and no `dist/` or `node_modules/` files are staged.

- [ ] **Step 5: Commit deployment configuration**

```bash
git add .github/workflows/pages.yml README.md
git commit -m "ci: deploy Desktop Migam site to GitHub Pages"
```

- [ ] **Step 6: Publish for review**

Push `feat/landing-site`, create a pull request into `main`, confirm CI, merge only with user authorization, then enable Pages with GitHub Actions as the source if the repository has not already selected it.
