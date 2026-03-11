import { products } from "@/data/products";

export interface BehaviorSignal {
  categoryViews: Record<string, number>;
  promptCopies: number;
  favorites: number;
  productPageViews: number;
  searched: string[];
}

const productCategoryMap: Record<string, string[]> = {
  "brand-identity-prompt-kit": ["Branding"],
  "viral-visual-ad-pack": ["Social Media", "Product Ads"],
  "cinematic-poster-prompt-pack": ["Poster Design", "Cinematic Scenes"],
  "social-content-machine-kit": ["Social Media"],
  "character-design-prompt-bundle": ["Character Design"],
  "thumbnail-cover-system": ["Thumbnail Concepts"],
  "aesthetic-palette-library": ["Aesthetic References"]
};

export function getRecommendations(signal: BehaviorSignal) {
  const scores = new Map<string, number>();

  products.forEach((product) => {
    let score = 0;
    const categories = productCategoryMap[product.slug] ?? [];
    categories.forEach((cat) => {
      score += (signal.categoryViews[cat] ?? 0) * 15;
    });
    score += product.recommended ? 5 : 0;
    score += signal.promptCopies > 2 ? 10 : 0;
    score += signal.favorites > 3 && product.slug === "nuvic-creative-system" ? 30 : 0;
    score += signal.productPageViews > 4 && product.slug === "creative-workflow-stack" ? 8 : 0;
    scores.set(product.slug, score);
  });

  return products
    .map((p) => ({ ...p, score: scores.get(p.slug) ?? 0 }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);
}
