/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CONDITIONS GÉNÉRALES D’UTILISATION — Livraison Plus
 * ─────────────────────────────────────────────────────────────────────────────
 * Chaque section comprend un titre et un tableau de paragraphes.
 * La date de mise à jour est affichée en haut de la page.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const termsOfService = {
  effectiveDate: '23 octobre 2026',

  sections: [
    {
      heading: '1. Présentation',
      content: [
        'Bienvenue sur le site de Livraison Plus, un service indépendant de livraison et de courses à Marrakech et dans les environs.',
        'Les présentes Conditions générales d’utilisation (« CGU ») encadrent l’accès au site www.livraisonplus.ma et l’utilisation des services proposés. En utilisant le site ou en sollicitant un service, vous reconnaissez avoir pris connaissance des présentes conditions.',
      ],
    },
    {
      heading: '2. Objet',
      content: [
        'Les présentes CGU définissent les règles d’utilisation du site et les principales conditions applicables aux demandes de livraison, de courses et d’achats effectués pour le compte du client.',
        'Les demandes de service sont organisées selon les informations communiquées par le client, la disponibilité des articles et des commerces, ainsi que les possibilités de livraison au moment de la demande.',
      ],
    },
    {
      heading: '3. Utilisation des services',
      content: [
        'Le client peut contacter Livraison Plus, notamment par WhatsApp ou par téléphone, pour préciser sa demande, les articles souhaités et le lieu de livraison.',
        'Le client s’engage à fournir des informations exactes et suffisamment précises, notamment concernant les articles demandés, ses coordonnées et l’adresse de livraison.',
        'L’acceptation d’une demande dépend de sa faisabilité, de la disponibilité des produits et de la possibilité d’effectuer la livraison. Une demande n’est confirmée qu’après échange avec Livraison Plus.',
      ],
    },
    {
      heading: '4. Disponibilité du site',
      content: [
        'Livraison Plus s’efforce de maintenir le site accessible. Toutefois, l’accès peut être temporairement interrompu en raison d’opérations de maintenance, de mises à jour, de problèmes techniques ou de circonstances indépendantes de notre volonté.',
        'Les informations publiées sur le site sont fournies à titre informatif et peuvent être modifiées. Nous faisons des efforts raisonnables pour les maintenir à jour, sans garantir que le site sera disponible en permanence ou exempt d’erreurs.',
      ],
    },
    {
      heading: '5. Commandes, achats et livraison',
      content: [
        'Les produits restent soumis à leur disponibilité auprès des commerces concernés. Livraison Plus ne peut garantir la disponibilité, le prix, la qualité ou les délais annoncés par un commerce tiers.',
        'Le client doit vérifier les informations de sa demande et préciser toute instruction utile avant la confirmation. En cas d’indisponibilité d’un article ou de difficulté affectant la livraison, Livraison Plus peut contacter le client afin de convenir d’une solution.',
        'Les modalités pratiques de paiement et de livraison sont communiquées au client lors de l’organisation de sa demande. Aucun délai précis n’est garanti tant qu’il n’a pas été confirmé.',
      ],
    },
    {
      heading: '6. Obligations du client',
      content: [
        'Le client s’engage à communiquer des informations de contact valides, à fournir une adresse de livraison correcte et à rester joignable si des précisions sont nécessaires.',
        'Le client doit s’assurer qu’une personne peut réceptionner la livraison au lieu convenu. Tout changement d’adresse ou d’instruction doit être signalé dès que possible.',
        'Les services ne doivent pas être utilisés à des fins illicites ni pour demander la livraison d’articles dont la vente ou la livraison est interdite par la loi.',
      ],
    },
    {
      heading: '7. Responsabilité',
      content: [
        'Livraison Plus met en œuvre des efforts raisonnables pour traiter les demandes avec soin. Toutefois, les délais et la réalisation d’une demande peuvent dépendre de facteurs externes, notamment la circulation, la météo, la disponibilité des produits ou les horaires des commerces.',
        'Dans les limites autorisées par la loi, Livraison Plus ne peut être tenu responsable des interruptions du site ou des retards et indisponibilités causés par des circonstances indépendantes de son contrôle. Cette disposition ne limite pas les droits dont le client bénéficie impérativement en vertu de la législation applicable.',
      ],
    },
    {
      heading: '8. Propriété intellectuelle',
      content: [
        'Les éléments du site, notamment les textes, visuels, logos et éléments graphiques, sont protégés par les règles applicables en matière de propriété intellectuelle. Ils appartiennent à Livraison Plus ou sont utilisés avec l’autorisation de leurs titulaires.',
        'Toute reproduction ou réutilisation de ces éléments sans autorisation préalable est interdite, sauf dans les cas permis par la loi.',
      ],
    },
    {
      heading: '9. Modification des CGU',
      content: [
        'Livraison Plus peut mettre à jour les présentes CGU afin de refléter les évolutions du site ou des services. La version en vigueur est celle publiée sur cette page, accompagnée de sa date de mise à jour.',
      ],
    },
    {
      heading: '10. Droit applicable',
      content: [
        'Les présentes CGU sont soumises au droit marocain, sous réserve des dispositions impératives applicables. En cas de difficulté, les parties sont invitées à rechercher une solution amiable avant toute autre démarche.',
      ],
    },
    {
      heading: '11. Nous contacter',
      content: [
        'Pour toute question concernant ces conditions ou les services de Livraison Plus, vous pouvez nous contacter par e-mail à contact@livraisonplus.ma ou par téléphone au +212 674-007161.',
      ],
    },
  ],
} as const;

export type TermsOfService = typeof termsOfService;
