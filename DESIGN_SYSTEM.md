# Design system

Derived from the Glamora logo: deep plum wordmark, brushed gold ribbons, warm cream background, rose lips, soft sparkle details. Shape language is curved and flowing, so cards and buttons use large radii and pill shapes. Personality: elegant, warm, premium without being cold.

## Colors (`tailwind.config.js`)

| Token | Hex | Use |
|---|---|---|
| `plum` | `#4A1938` | Headings, primary buttons |
| `plum-700` | `#6A2B52` | Hover, gradients |
| `plum-900` | `#2E0F23` | Dark sections, footer |
| `gold` | `#B38B4A` | Accents, gold button |
| `gold-light` | `#D9B877` | Icons on dark, sparkles |
| `gold-dark` | `#8A6A33` | Gold text (readable on cream) |
| `cream-50/100/200/300` | `#FCF7F3` / `#F7ECE3` / `#EFDCCF` / `#E5C9B8` | Page and section backgrounds |
| `rose` | `#A4687A` | Soft glow accents |
| `ink` | `#2A1220` | Body text |

## Typography

- Display (English headings and wordmark): Cormorant Garamond.
- Arabic: Cairo (headings and body in Arabic mode). Latin UI text: Tajawal.
- Fonts load with `display=swap` and `preconnect`.

## Layout and spacing

- Container: max 72rem, 20px side padding on mobile, 32px from `sm`.
- Section rhythm: 80px vertical padding (96px from `sm`).
- Radii: 24px cards, 9999px buttons and pills.
- Components: `.btn`, `.btn-primary`, `.btn-gold`, `.btn-ghost`, `.eyebrow`, `.h2` in `src/index.css`.

## Motion

Scroll reveal (fade and rise, 0.6s) via Framer Motion LazyMotion, applied once per element. When the visitor prefers reduced motion, the reveal is skipped and CSS transitions are shortened.
