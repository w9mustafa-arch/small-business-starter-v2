/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE DATA — the single file every template user edits
 * ─────────────────────────────────────────────────────────────────────────────
 * Business name, contact info, services, reviews, team, hours, and navigation
 * all live here. Components and pages import from this file so you never need
 * to hunt through markup to update your business details.
 *
 * IMPORTANT: also update the `site` field in astro.config.mjs to match your
 * production domain.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const siteData = {
  // ── Business identity ────────────────────────────────────────────────────
  name: 'LIVRAISON PLUS',
  tagline: 'Livreur Marrakech 24h/24 et 7j/7 – Livraison rapide et fiable',
  description:
    'A fast, mobile-first small-business website template built with Astro 7 and Tailwind v4. Fully customisable for any trade or service business.',
  url: 'https://example.com',
  locale: 'en_US',

  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  license: 'MARRAKECH',

  // ── Contact ──────────────────────────────────────────────────────────────
  email: 'hello@example.com',
  phoneForTel: '+212674007161',
  phoneFormatted: '+212 674-007161',
  address: {
    lineOne: '123 Main Street',
    lineTwo: 'Suite 100',
    city: 'Denver',
    state: 'CO',
    zip: '80206',
    country: 'US',
    mapLink: 'https://maps.app.goo.gl/example',
  },
  hours: [
    { days: 'Monday - Friday', time: '7:00 AM - 6:00 PM' },
    { days: 'Saturday', time: '8:00 AM - 2:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
  emergencyService: '24/7 Emergency Service Available',

  // ── Social media (set to empty string to hide a link) ────────────────────
  socials: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    google: 'https://www.google.com/maps',
  },

  // ── Navigation (add, remove, or reorder as needed) ───────────────────────
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],

  // ── Services ─────────────────────────────────────────────────────────────
      services: [
  {
    title: 'Livraison de Repas à Marrakech',
    description:
      'Faites-vous livrer vos plats préférés depuis les restaurants de Marrakech, à domicile, au bureau ou à votre riad.',
    buttonText: 'Commander un repas',
    href: 'https://wa.me/212674007161',
  },
  {
    title: 'Courses & Supermarché à Domicile',
    description:
      'Envoyez-nous votre liste de courses. Nous effectuons vos achats au supermarché et vous les livrons à domicile.',
    buttonText: 'Envoyer ma liste',
    href: 'https://wa.me/212674007161',
  },
  {
    title: 'Pharmacie & Produits de Santé',
    description:
      'Besoin d’un produit de pharmacie ? Contactez-nous pour organiser la récupération et la livraison de vos achats.',
    buttonText: 'Faire une demande',
    href: 'https://wa.me/212674007161',
  },
  {
    title: 'Livraison aux Riads & Hôtels',
    description:
      'En séjour à Marrakech ? Recevez vos repas et vos achats directement à votre riad, hôtel ou lieu de séjour.',
    buttonText: 'Organiser ma livraison',
    href: 'https://wa.me/212674007161',
  },
  {
    title: 'Livraison de Colis & Documents',
    description:
      'Un colis ou un document à envoyer à Marrakech ? Nous le récupérons et le livrons à son destinataire.',
    buttonText: 'Envoyer un colis',
    href: 'https://wa.me/212674007161',
  },
  {
    title: 'Service de Coursier Personnalisé',
    description:
      'Un achat à récupérer ou une course à effectuer ? Expliquez-nous votre besoin pour organiser votre livraison.',
    buttonText: 'Faire une demande',
    href: 'https://wa.me/212674007161',
  },
],

  // ── Reviews ──────────────────────────────────────────────────────────────
  reviews: [
    { quote: "They showed up on time, explained everything clearly, and finished the job faster than expected. Best service experience we've had.", name: 'Sarah M.', location: 'Denver, CO', rating: 5 },
    { quote: "Honest pricing and top-notch work. I've used them for three different projects now and they never disappoint.", name: 'James R.', location: 'Aurora, CO', rating: 5 },
    { quote: 'Our emergency call was answered in minutes. They had the problem fixed before dinner. Truly dependable.', name: 'Linda K.', location: 'Lakewood, CO', rating: 5 },
    { quote: 'The remodel turned out even better than we imagined. Professional, clean, and on budget. We couldn\'t be happier.', name: 'Tom & Beth P.', location: 'Boulder, CO', rating: 5 },
    { quote: 'Great communication from start to finish. They sent photos of the progress and cleaned up perfectly when done.', name: 'Anita W.', location: 'Littleton, CO', rating: 5 },
    { quote: "I appreciate the upfront pricing — no hidden fees or surprise charges. That's rare these days. Highly recommend.", name: 'Marcus D.', location: 'Arvada, CO', rating: 5 },
  ],

  // ── About page ───────────────────────────────────────────────────────────
  about: {
    story: [
      'What started as a one-person operation has grown into a trusted local team. For over 15 years, we\'ve served homeowners and businesses with reliable, high-quality work — and we plan to keep doing just that for decades to come.',
      'Every member of our crew is licensed, insured, and background-checked. We treat your property with the same care we\'d give our own, and we stand behind every job with a satisfaction guarantee.',
    ],
    team: [
      { name: 'John Smith', role: 'Founder & Lead Technician', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
      { name: 'Maria Garcia', role: 'Operations Manager', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
      { name: 'David Chen', role: 'Senior Technician', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
    ],
  },

  // ── Trust bar items (homepage strip) ─────────────────────────────────────
  trustItems: [
    { label: 'Toute Marrakech' },
    { label: 'Livraison Express' },
    { label: 'Livreurs Sécurisés' },
    { label: 'Disponible', value: '24h/24' },
  ],

  // ── Footer nav columns ──────────────────────────────────────────────────
  footerNav: [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Reviews', href: '/reviews' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ],
    },
  ],
} as const;

export type SiteData = typeof siteData;
