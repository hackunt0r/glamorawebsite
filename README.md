# Glamora Beauty Salon, landing page

Bilingual (Arabic RTL default, English LTR) landing page for a women's beauty salon.
Stack: React 19, Vite, TypeScript, Tailwind CSS 3, Framer Motion (LazyMotion), Lucide icons, React Hook Form, Zod.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build into dist/
npm run preview    # serve dist/ locally
```

Node 20+ recommended.

## Change the business data (important)

All contact details live in **`src/config/site.ts`**. Every value there is **sample data** so the site works out of the box:

| Field | What it drives |
|---|---|
| `whatsappNumber` | Every booking button, the floating button and the form (`https://wa.me/<number>`) |
| `phoneDisplay` / `phoneHref` | Phone links |
| `email` | Footer mailto |
| `instagram`, `facebook`, `tiktok` | Footer links |
| `mapsUrl` | "Open map" button |

Opening hours and the sample address text are in `src/i18n/content.ts` (`contact.hoursText`, `contact.addressText`), in both languages.
Also replace `glamora.example.com` in `index.html`, `public/robots.txt`, `public/sitemap.xml` and `.env.example` with the real domain.

## How the contact form works

There is no backend. Submitting a valid form builds a prefilled message and opens WhatsApp (`wa.me`) in a new tab. The message is only sent when the visitor presses send inside WhatsApp. The page shows a status note and a fallback link; it never claims the booking was received.
To store requests on a server later, add an endpoint and call it inside `onSubmit` in `src/components/Contact.tsx` (an email service, a CRM webhook, or a Google Sheets script all work).

## Project structure

```
src/
  config/site.ts        business data (edit this)
  i18n/content.ts       all copy, Arabic and English
  components/           Header, Hero, Sections (About, Services, Steps, Faq), Contact, Footer, Reveal, Ornaments
public/brand/           logo-original.png (untouched), logo-960.webp / logo-480.webp (resized copies for performance)
```

## Deployment

The build output is a static site in `dist/`.

- **Vercel / Netlify / Cloudflare Pages:** connect the repo, build command `npm run build`, output directory `dist`.
- **VPS (nginx):** copy `dist/` to the web root and serve `index.html` as the fallback.

Set `VITE_SITE_URL` if you want to override the site URL at build time.

## Logo usage

The original logo file is stored unchanged at `public/brand/logo-original.png`. The page displays resized WebP copies of the same artwork (no recoloring, cropping, or stretching) to keep load time low.

## More docs

- `DESIGN_SYSTEM.md` colors, type, spacing
- `ASSET_SOURCES.md` image and font sources
- `QA_REPORT.md` what was tested and known limitations
