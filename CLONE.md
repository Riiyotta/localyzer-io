# clone/ — Localyzer | The Brand-to-Local System for Co-op Marketing

A runnable **Vite + React + react-router + Tailwind v3** project written from the real rendered DOM of https://www.localyzer.io/: one component per section with that section's own markup, the site's own stylesheets, its real images, fonts and video under `public/`, routes declared in `src/routes.js`.

```
npm install
npm run dev      # http://localhost:5173
npm run build
```

## What is in it

- `src/sections/`: **366** component(s) (535 section instance(s) over 89 route(s); identical markup shared across routes is one component).
- `src/pages/` + `src/routes.js` + `src/App.jsx`: one page per captured route, sections in page order, react-router links between captured pages.
- `src/styles/`: the site's own CSS, copied as it was with every `url()` rewritten to a file under `public/`; `tokens.css` + `tailwind.config.cjs` carry the measured design tokens (Tailwind utilities load first, preflight is off, so the site's CSS wins).
- `public/`: **328** real file(s), 144.9 MB (images, fonts, video, SVG). Nothing points outside the project.
- `clone-manifest.json`: route → page → component map, every still, every dropped file.

## Animation

- **Canvas / Rive areas: 0 still(s) captured** (0 canvas(es) drew nothing and are an empty, correctly sized box). The 0 `.riv` file(s) are **not** included: a remix cannot recolour or redraw a Rive file and would ship the original mascot on every generated site. Replace each still with an image slot, CSS or GSAP.
- **Scroll-driven motion is not reproduced.** The clone keeps one reveal-on-scroll observer only. Pinned / scrubbed sections: `hp-hero-c`, `hp-hero-img-c`, `hp-platform-s`. Rebuild them with CSS or GSAP in the remix.
- **Scroll-reveal: 86 element(s)** that started hidden or offset and animated in are marked `data-reveal`; one IntersectionObserver (`src/lib/usePageChrome.js`) fades them up (off under reduced motion).
- **Not reproduced**: GSAP timelines / ScrollTrigger pins and scrubs (pin wrappers are removed, content flows normally), Lenis smooth scroll, menus, accordions, tabs, carousels and other script behaviour (only the state the page was in after load is captured), forms (submit is prevented), third-party frames (replaced by an empty box of the same size), shadow-DOM content.
- **No analytics or trackers**: none are in `src/` or `public/`.
- **No external links**: links to other sites (and to pages that were not captured) keep their element and styling but have no `href`; links between cloned pages go through the router. `--keep-external-links` keeps them.

## Checks run by the builder

| Check | Result |
|---|---|
| Every `src` / `url()` the code points at exists in `public/` | PASS (516 image reference(s), 516 resolved) |
| No tracker host in code or `public/` | FAIL |
| No external hyperlink in `src/` | PASS (206 link(s) to other sites or uncaptured pages lost their target) |
| No placeholder boxes from the level-2 scaffold | PASS |
| Vite build + every route loads offline | PASS: vite build ok; 89 route(s) loaded: 0 console/network error(s), 0 outside host(s), 0 empty page(s) |
| Parity vs the original page, per section (gate 80%) | PASS: average 98.1% over 6 route(s) |

### Parity detail

Each section of the built clone is compared with the same section of the **original page**: the crawl's own full-page screenshot at 1440 px (`extras/images/`, taken from the live site with its scripts running) cut at that section's rectangle, or a fresh screenshot of the offline mirror when that file is missing. Both sides are compared on a half-scale grid; a pixel matches when no channel differs by more than 40/255, and a section whose height differs by more than 10 % is scaled down by the height ratio (except GSAP-pinned sections, whose extra scroll length is a script's doing). The route score weights sections by height. Sections below the gate get a side-by-side picture (original | clone) in `qa/parity/`. Whole-page height is not scored: GSAP pin spacers add blank scroll length the clone does not reproduce. Live animation, video and carousels in motion differ by design.

**`/`**: 96.8% over 10 of 10 section(s) (reference: original crawl screenshot); page height 14238 → 9739 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `GlobalHeaderC` | 99 → 99 px | 100.0% | 100.0% |
| 1 | `HpHeroC` | 673 → 673 px | 99.8% | 99.8% (GSAP-pinned: scroll length not reproduced) |
| 2 | `HpHeroImgC` | 782 → 782 px | 90.7% | 90.7% (GSAP-pinned: scroll length not reproduced) |
| 3 | `HpPlatformS` | 900 → 900 px | 80.7% | 80.7% (GSAP-pinned: scroll length not reproduced) |
| 4 | `HpTrustS` | 1330 → 1330 px | 99.4% | 99.4% |
| 5 | `HpMarketingSectionTitle` | 284 → 284 px | 97.2% | 97.2% |
| 6 | `WLayoutGrid` | 1622 → 1622 px | 99.9% | 99.9% |
| 7 | `HpCustomerS` | 1240 → 1240 px | 100.0% | 100.0% |
| 8 | `HpInsightsS` | 1048 → 1048 px | 97.8% | 97.8% |
| 9 | `FooterS` | 1074 → 1074 px | 99.9% | 99.9% |

**`/blog/tradespeople-online-availability-germany`**: 96.7% over 7 of 7 section(s) (reference: original crawl screenshot); page height 6579 → 6565 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `GlobalHeaderC15` | 99 → 99 px | 100.0% | 100.0% |
| 1 | `ArtHeaderW8` | 370 → 370 px | 99.9% | 99.9% |
| 2 | `ArtImageW8` | 648 → 648 px | 100.0% | 100.0% |
| 3 | `ArtContentW8` | 2634 → 2620 px | 93.7% | 93.7% |
| 4 | `ArtNewsletterS` | 491 → 491 px | 99.4% | 99.4% |
| 5 | `ArtRelatedS6` | 622 → 622 px | 98.2% | 98.2% |
| 6 | `FooterS8` | 1074 → 1074 px | 98.8% | 98.8% |

**`/blog/workation-in-cape-town---productivity-killer-or-performance-enhancer`**: 99.2% over 7 of 7 section(s) (reference: original crawl screenshot); page height 5062 → 5062 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `GlobalHeaderC30` | 99 → 99 px | 100.0% | 100.0% |
| 1 | `ArtHeaderW23` | 312 → 312 px | 99.9% | 99.9% |
| 2 | `ArtImageW23` | 648 → 648 px | 100.0% | 100.0% |
| 3 | `ArtContentW23` | 1175 → 1175 px | 100.0% | 100.0% |
| 4 | `ArtNewsletterS` | 491 → 491 px | 99.4% | 99.4% |
| 5 | `ArtRelatedS15` | 622 → 622 px | 98.3% | 98.3% |
| 6 | `FooterS8` | 1074 → 1074 px | 98.0% | 98.0% |

**`/category/product-update`**: 98.7% over 3 of 3 section(s) (reference: original crawl screenshot); page height 3095 → 3095 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `BlCategoryHeroS4` | 536 → 536 px | 100.0% | 100.0% |
| 1 | `BlCategoryMainS4` | 1306 → 1306 px | 98.9% | 98.9% |
| 2 | `FooterS15` | 1074 → 1074 px | 97.9% | 97.9% |

**`/de/blog/social-media-analyse-die-top-100-mittelstaendler`**: 97.7% over 7 of 7 section(s) (reference: original crawl screenshot); page height 9711 → 9697 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `GlobalHeaderC55` | 99 → 99 px | 100.0% | 100.0% |
| 1 | `ArtHeaderW40` | 370 → 370 px | 99.9% | 99.9% |
| 2 | `ArtImageW11` | 648 → 648 px | 100.0% | 100.0% |
| 3 | `ArtContentW40` | 5718 → 5704 px | 96.9% | 96.9% |
| 4 | `ArtNewsletterS2` | 506 → 506 px | 99.3% | 99.3% |
| 5 | `ArtRelatedS26` | 622 → 622 px | 98.4% | 98.4% |
| 6 | `FooterS18` | 1107 → 1107 px | 98.8% | 98.8% |

**`/de/blog/hyperlocalisation-ads-localyzer-fuehrt-neues-tool-zur-massenbuchung-von-tausenden-lokalen-online-kampagnen-ein`**: 99.7% over 7 of 7 section(s) (reference: original crawl screenshot); page height 6017 → 6017 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `GlobalHeaderC70` | 99 → 99 px | 100.0% | 100.0% |
| 1 | `ArtHeaderW55` | 427 → 427 px | 99.9% | 99.9% |
| 2 | `ArtImageW26` | 648 → 648 px | 100.0% | 100.0% |
| 3 | `ArtContentW55` | 1938 → 1938 px | 100.0% | 100.0% |
| 4 | `ArtNewsletterS2` | 506 → 506 px | 99.3% | 99.3% |
| 5 | `ArtRelatedS34` | 651 → 651 px | 98.2% | 98.2% |
| 6 | `FooterS18` | 1107 → 1107 px | 99.9% | 99.9% |

### Not mirrored

3 URL(s) pointed at outside hosts that the mirror does not hold and were left out of the clone: `https://_ext/assets.localyzer.io/video/car_repair.mp4`, `https://_ext/assets.localyzer.io/video/EN_OMR_Digital_Masterclass_Localyzer.mp4`, `https://_ext/assets.localyzer.io/video/OMR_Digital_Masterclass_Localyzer.mp4`

