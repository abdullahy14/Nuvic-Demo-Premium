export const recommendationRules = [
  { id: "rule-branding", condition: "branding_views>=3", action: "recommend:brand-identity-prompt-kit", weight: 80 },
  { id: "rule-social", condition: "social_copies>=2", action: "recommend:viral-visual-ad-pack", weight: 70 },
  { id: "rule-favorites", condition: "favorites>=5", action: "upsell:nuvic-creative-system", weight: 95 },
  { id: "rule-browse-wide", condition: "categories_viewed>=4", action: "recommend:creative-workflow-stack", weight: 65 },
  { id: "rule-abandon", condition: "product_abandons>=2", action: "offer:creator-growth-bundle", weight: 75 }
];
