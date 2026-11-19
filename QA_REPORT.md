# QA report

Tested on 2026-11-19 with the production build served by `vite preview`, driven by Playwright and Google Chrome (headless).

## Completed features

- Sticky header with logo, 5 anchor links, language switch, booking CTA, mobile menu
- Hero with the supplied logo, headline, two CTAs and trust points
- About, 6 service cards (each with its own prefilled WhatsApp request), 3-step booking section, FAQ accordion, contact section with hours, address, phone, map link and form
- Arabic (RTL, default) and English (LTR) with a persistent language switch
- Floating WhatsApp button, footer with links and social links
- SEO: title, meta description, Open Graph and Twitter tags, canonical, `robots.txt`, `sitemap.xml`, semantic headings
- Accessibility: skip link, labeled form fields with `aria-invalid` and live error messages, `aria-expanded` on menu and FAQ, visible focus ring, reduced-motion support

## Tested and passing

| Check | Result |
|---|---|
| `tsc --noEmit` and production build | Pass |
| All 5 navigation anchors resolve to a section | Pass |
| Mobile menu opens, and closes after choosing a link | Pass |
| Empty form submit shows 3 validation errors | Pass |
| Valid form submit opens a new tab to WhatsApp and shows the status note with fallback link | Pass (new tab opened; see limitation about reaching wa.me) |
| Language switch changes `dir` and `lang` (rtl/ar to ltr/en) | Pass |
| FAQ item toggles | Pass |
| No broken images | Pass |
| No horizontal overflow at 1440px and 390px | Pass |
| JavaScript errors | None |

## Limitations

- **Sample data:** the WhatsApp number, phone, email, social links, map link and address are placeholders. Bookings will not reach the salon until `src/config/site.ts` is updated.
- **Network in the test sandbox** blocked Google Fonts and wa.me, so the only console errors were those blocked requests, and the final WhatsApp page could not be loaded during the test. Font rendering and the actual wa.me page should be checked once deployed.
- No Lighthouse score was measured, so none is claimed. Production JS is about 465 kB (149 kB gzip).
- No photos (see `ASSET_SOURCES.md`), no testimonials, statistics or prices: nothing was invented. Add them when real material exists.
- No backend: requests go through WhatsApp only.
- Not tested on real iOS/Safari or Android devices.
