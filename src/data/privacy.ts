/**
 * ─────────────────────────────────────────────────────────────────────────────
 * POLITIQUE DE CONFIDENTIALITÉ — Livraison Plus
 * ─────────────────────────────────────────────────────────────────────────────
 * Chaque section contient un titre et un tableau de paragraphes.
 * La date de mise à jour est affichée en haut de la page.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const privacyPolicy = {
  effectiveDate: '23 octobre 2026',

  sections: [
    {
      heading: '1. Introduction',
      content: [
        'Chez Livraison Plus, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique quelles informations nous collectons, comment nous les utilisons et quels sont vos droits.',
      ],
    },
    {
      heading: '2. Identité du responsable du traitement',
      content: [
        'Nom de l’entreprise : Livraison Plus',
        'Adresse : Marrakech, Maroc',
        'E-mail : contact@livraisonplus.ma',
        'Téléphone : +212 674-007161',
      ],
    },
    {
      heading: '3. Données personnelles collectées',
      content: [
        'Nous collectons les données personnelles que vous choisissez de nous communiquer, notamment lorsque vous nous contactez ou demandez un service : nom, prénom, adresse e-mail, numéro de téléphone et contenu du message.',
        'Lors de votre navigation sur le site, certaines données techniques peuvent être recueillies, comme l’adresse IP, le type de navigateur et les pages consultées, notamment au moyen de cookies ou de technologies similaires.',
        'Si des outils publicitaires sont utilisés, des données relatives aux clics et aux conversions peuvent également être traitées par des plateformes telles que Google Ads ou Meta Ads, selon les paramètres de consentement applicables.',
      ],
    },
    {
      heading: '4. Finalités de la collecte',
      content: [
        'Les données sont utilisées pour répondre à vos demandes, organiser les services sollicités, améliorer le fonctionnement et l’expérience utilisateur du site, mesurer l’audience et, le cas échéant, gérer et optimiser les campagnes publicitaires.',
        'Elles peuvent également être traitées lorsque cela est nécessaire au respect de nos obligations légales.',
      ],
    },
    {
      heading: '5. Durée de conservation',
      content: [
        'Les données sont conservées pendant une durée proportionnée à la finalité du traitement et aux obligations légales applicables. À titre indicatif, les demandes de contact peuvent être conservées jusqu’à 12 mois et certaines données de navigation jusqu’à 13 mois, sous réserve des règles applicables et des paramètres des outils utilisés.',
        'Les données liées aux prestations et aux clients sont conservées pendant la durée nécessaire à la gestion de la relation et conformément aux obligations légales en vigueur.',
      ],
    },
    {
      heading: '6. Partage des données',
      content: [
        'Livraison Plus ne vend pas vos données personnelles. Elles peuvent être communiquées, dans la mesure nécessaire, à des prestataires techniques intervenant dans l’hébergement, la maintenance, l’analyse d’audience ou la gestion publicitaire du site.',
        'Les plateformes publicitaires, telles que Google ou Meta, peuvent traiter certaines données lorsque leurs outils sont utilisés et lorsque les conditions de consentement applicables sont remplies.',
      ],
    },
    {
      heading: '7. Cookies',
      content: [
        'Le site peut utiliser des cookies ou technologies similaires pour mesurer l’audience, mémoriser certaines préférences et, le cas échéant, mesurer ou optimiser les campagnes marketing.',
        'Lorsque cela est requis, votre consentement est demandé avant le dépôt de cookies non essentiels. Vous pouvez modifier vos choix à partir du dispositif de gestion des cookies lorsqu’il est disponible, ou configurer votre navigateur.',
      ],
    },
    {
      heading: '8. Vos droits',
      content: [
        'Conformément à la législation marocaine applicable, notamment la loi n° 09-08, et au RGPD lorsque celui-ci s’applique, vous pouvez disposer de droits d’accès, de rectification, d’effacement, d’opposition et, dans les cas prévus par la loi, de limitation du traitement.',
        'Pour exercer vos droits ou poser une question concernant vos données personnelles, contactez-nous à l’adresse suivante : contact@livraisonplus.ma.',
      ],
    },
    {
      heading: '9. Sécurité des données',
      content: [
        'Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables destinées à protéger les données personnelles contre l’accès non autorisé, la perte, l’altération ou la divulgation. Aucun système de transmission ou de stockage ne pouvant garantir une sécurité absolue, nous ne pouvons toutefois assurer une protection sans risque.',
      ],
    },
    {
      heading: '10. Modifications',
      content: [
        'Nous pouvons modifier cette politique de confidentialité à tout moment. Toute mise à jour sera publiée sur cette page avec une nouvelle date de mise à jour.',
      ],
    },
    {
      heading: 'Contact',
      content: [
        'Pour toute question relative à cette politique ou au traitement de vos données personnelles, vous pouvez nous écrire à contact@livraisonplus.ma ou nous appeler au +212 674-007161.',
      ],
    },
  ],
} as const;

export type PrivacyPolicy = typeof privacyPolicy;
