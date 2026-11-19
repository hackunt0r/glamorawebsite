/**
 * ONE place for all business data.
 *
 * IMPORTANT: every value marked PLACEHOLDER was filled in as sample data so the
 * site works end-to-end out of the box. Replace them with the salon's real
 * details before going live. Nothing else in the codebase hard-codes contact data.
 */
export const site = {
  name: 'Glamora',
  // PLACEHOLDER: international format, digits only (Egypt example: 20 + number without leading 0)
  whatsappNumber: '201000000000',
  // PLACEHOLDER
  phoneDisplay: '+20 100 000 0000',
  phoneHref: 'tel:+201000000000',
  // PLACEHOLDER
  email: 'hello@glamora.example.com',
  // PLACEHOLDER social profiles (swap for the real ones)
  instagram: 'https://www.instagram.com/glamora.salon',
  facebook: 'https://www.facebook.com/glamora.salon',
  tiktok: 'https://www.tiktok.com/@glamora.salon',
  // PLACEHOLDER: opens a Google Maps search; replace with the salon's real pin link
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Glamora+Beauty+Salon+Cairo',
  siteUrl: (import.meta.env.VITE_SITE_URL as string | undefined) ?? 'https://glamora.example.com',
} as const

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`
