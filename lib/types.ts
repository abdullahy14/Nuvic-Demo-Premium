export type AccessLevel = "FREE" | "PARTIAL" | "PREMIUM";

export interface Prompt {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  popularity: number;
  isRecommended: boolean;
  access: AccessLevel;
  lockPercentage: number;
  previewImage: string;
  previewText: string;
  fullText: string;
  relatedProductSlugs: string[];
}

export interface DemoAsset {
  id: string;
  title: string;
  type: string;
  category: string;
  description: string;
  access: AccessLevel;
  previewImage: string;
  relatedProductSlugs: string[];
}

export interface Product {
  slug: string;
  title: string;
  hook: string;
  shortDescription: string;
  longDescription: string;
  useCases: string[];
  audience: string;
  includedItems: string[];
  tags: string[];
  category: string;
  type: string;
  price: number;
  compareAtPrice: number;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  bestseller?: boolean;
  recommended?: boolean;
  includedInSystem?: boolean;
  images: string[];
}
