/**
 * ─────────────────────────────────────────────────────────────────────────────
 * BRAND CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Site identity and font names used by layouts, components, and SEO metadata.
 *
 * Fonts flow into   → astro.config.mjs  (Astro 7 built-in font optimizer)
 * Meta flows into   → src/layouts/BaseLayout.astro
 *
 * Colors & radius live in ONE place: src/styles/theme.css (@theme block).
 * Edit theme.css directly — do not duplicate values here.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  // ── Site Identity ──────────────────────────────────────────────────────────
  name: 'Livreur Express',
  tagline: 'Votre livreur à Marrakech : un message, et c’est livré',
  description: 'Un message WhatsApp, et votre livreur à Marrakech récupère repas, courses, pharmacie ou colis et les livre chez vous, au riad ou à l’hôtel. 24h/24, 7j/7.',
  url: 'https://www.livraisonplus.ma',
  locale: 'fr_FR',

  // ── Fonts ──────────────────────────────────────────────────────────────────
  // To swap fonts: change the `name` values here AND update astro.config.mjs
  // to match (both must stay in sync so Astro can optimise the correct files).
  fonts: {
    body: 'Inter',
    display: 'Oswald',
  },
} as const;

export type Brand = typeof brand;
