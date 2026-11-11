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
  name: 'Livreur Express',
  tagline: 'Livreur Marrakech 24h/24 et 7j/7 – Livraison rapide et fiable',
  description:
    'Livreur Express : votre livreur à Marrakech, 24h/24 et 7j/7. Repas, courses, pharmacie, pressing, fleurs et colis livrés à domicile, au riad ou à l’hôtel.',
  url: 'https://www.livraisonplus.ma',
  locale: 'fr_FR',

  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  license: 'MARRAKECH',

  // ── Contact ──────────────────────────────────────────────────────────────
  email: 'contact@livraisonplus.ma',
  phoneForTel: '+212674007161',
  phoneFormatted: '+212 674-007161',
  address: {
    lineOne: '',
    lineTwo: '',
    city: 'Marrakech',
    state: 'Marrakech-Safi',
    zip: '',
    country: 'MA',
    mapLink: 'https://maps.app.goo.gl/L35SPtbGktwwwFFW7?g_st=ac',
  },
  hours: [
  { days: 'Tous les jours', time: '24h/24' },
],
  emergencyService: 'Service disponible 24h/24 et 7j/7',

  // ── Social media (set to empty string to hide a link) ────────────────────
  socials: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    google: 'https://www.google.com/maps',
  },

  // ── Navigation (add, remove, or reorder as needed) ───────────────────────
  nav: [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Services', href: '/services' },
    { label: 'Avis Clients', href: '/avis' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contactez-nous', href: '/contactez-nous' },
    { label: 'FAQ', href: '/faq' },
  ],

services: [
  {
    title: 'Livraison de repas à Marrakech',
    description:
      'Choisissez votre restaurant et vos plats sur WhatsApp. Votre livreur à Marrakech récupère la commande et la livre à domicile, au bureau, au riad ou à l’hôtel.',
    buttonText: 'Commander un repas',
    href: 'https://wa.me/212674007161',
  },
  {
    title: 'Courses et supermarché',
    description:
      'Envoyez votre liste de courses. Nous achetons vos produits et assurons la livraison à Marrakech chez vous, à votre villa ou à votre hôtel.',
    buttonText: 'Envoyer ma liste',
    href: 'https://wa.me/212674007161',
  },
  {
    title: 'Pharmacie',
    description:
      'Indiquez les produits de pharmacie dont vous avez besoin. Nous vérifions leur disponibilité, les achetons et les livrons rapidement.',
    buttonText: 'Demander un produit',
    href: 'https://wa.me/212674007161',
  },
  {
    title: 'Pressing et blanchisserie',
    description:
      'Nous déposons votre linge au pressing, le récupérons et vous le rapportons à domicile ou à l’hôtel, partout à Marrakech.',
    buttonText: 'Organiser ma demande',
    href: 'https://wa.me/212674007161',
  },
  {
    title: 'Fleurs et cadeaux',
    description:
      'Envoyez-nous votre demande et l’adresse du destinataire. Nous récupérons le bouquet ou le cadeau et le livrons à Marrakech.',
    buttonText: 'Faire livrer un cadeau',
    href: 'https://wa.me/212674007161',
  },
  {
    title: 'Livreur et coursier à la demande',
    description:
      'Un colis, un document ou un achat à récupérer ? Votre livreur à Marrakech s’en charge, de jour comme de nuit. Décrivez votre demande sur WhatsApp.',
    buttonText: 'Décrire ma demande',
    href: 'https://wa.me/212674007161',
  },
],

  // ── Reviews ──────────────────────────────────────────────────────────────
  reviews: [
    { quote: "Très bon service, rapide et fiable allah yser likum", name: 'Marwa Swabni', location: 'Marrakech', rating: 5 },
    { quote: "Merci beaucoup Tbarklah elik service mzn odriyf okatakhod Ikhatr Iwahd 🙏", name: 'Shriri Donya', location: 'Marrakech', rating: 5 },
    { quote: "Très bon service, sérieux, ponctuel et réactif. Je le recommande 👍👍👍👍👍", name: 'Abdlhafaid Id Ihcen', location: 'Marrakech', rating: 5 },
    { quote: "Livraison très vite et un bon livreur", name: 'El Batalani Hiba', location: 'Marrakech', rating: 5 },
    { quote: "Excellent service,un gars formidable qui fait un effort supplémentaire pour ses clients,l utilisera toujours au marrakech.merci bon courage 😚", name: 'Hossain Rouchdi', location: 'Marrakech', rating: 5 },
    { quote: "Merci pour votre service de qualité. La livraison était rapide et le service au top. Je suis très satisfait", name: 'Prof SVT', location: 'Marrakech', rating: 5 },
    { quote: "Un grand merci au livreur : serviable, très sympa et super réactif, même en urgence. Je recommande.", name: 'alahyane hassan', location: 'Marrakech', rating: 5 },
    { quote: "Excellent livreur ! Toujours ponctuel, sérieux et très respectueux. Les livraisons se passent parfaitement à chaque fois. Service de qualité, je recommande sans hésitation.", name: 'said id issa', location: 'Marrakech', rating: 5 },
],


  // ── About page ───────────────────────────────────────────────────────────
  about: {
    story: [
      'Livreur Express est née à Marrakech d’un besoin simple : se faire livrer vite, sans complications.',
      'Notre équipe de livreurs connaît les quartiers de la ville et les ruelles de la médina. Vous nous écrivez sur WhatsApp, nous récupérons votre commande et la livrons où vous voulez, de jour comme de nuit.',
    ],
    team: [],
  },

// ── Brands strip (homepage) ──────────────────────────────────────────────
  trustItems: [
    { label: "McDonald's" },
    { label: 'KFC' },
    { label: 'Burger King' },
    { label: 'Little Mama' },
    { label: 'Pizza Hut' },
    { label: 'Tacos 212' },
    { label: 'Crusty Rapide' },
    { label: 'Carrefour' },
    { label: 'Marjane' },
  ],

  // ── Footer nav columns ──────────────────────────────────────────────────
  footerNav: [
    {
      title: 'Entreprise',
      links: [
        { label: 'À propos', href: '/a-propos' },
        { label: 'Services', href: '/services' },
        { label: 'Avis Clients', href: '/avis' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Assistance',
      links: [
        { label: 'Contactez-nous', href: '/contactez-nous' },
        { label: 'Confidentialité', href: '/politique-de-confidentialite' },
        { label: 'CGU', href: '/conditions-generales-dutilisation' },
      ],
    },
  ],
} as const;

export type SiteData = typeof siteData;
