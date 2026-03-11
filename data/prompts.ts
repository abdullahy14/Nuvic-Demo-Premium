import { Prompt } from "@/lib/types";

const categories = [
  "Image Generation","Branding","Social Media","Product Ads","Character Design","Cinematic Scenes","Fashion Visuals","Poster Design","Thumbnail Concepts","Creative Direction","Video Prompting","Aesthetic References"
];

export const prompts: Prompt[] = Array.from({ length: 30 }).map((_, i) => {
  const category = categories[i % categories.length];
  const premium = i % 3 === 0;
  const slug = `${category.toLowerCase().replace(/\s+/g, "-")}-${i + 1}`;
  return {
    id: slug,
    title: `${category} Prompt ${i + 1}`,
    description: `Conversion-ready ${category.toLowerCase()} concept prompt for high-quality demo exploration.`,
    category,
    tags: [category.split(" ")[0], "AI", i % 2 ? "Growth" : "Premium"],
    popularity: 60 + (i % 40),
    isRecommended: i % 5 === 0,
    access: premium ? "PARTIAL" : "FREE",
    lockPercentage: premium ? 70 : 0,
    previewImage: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    previewText: `Scene intent, composition anchors, and style signals for ${category}.`,
    fullText: `You are an elite creative director. Build a ${category.toLowerCase()} output with layered composition, color hierarchy, emotional tone, and conversion intent. Include hero element, supporting motifs, and campaign-ready variant prompts.`,
    relatedProductSlugs: [
      category === "Poster Design" || category === "Cinematic Scenes" ? "cinematic-poster-prompt-pack" :
      category === "Branding" ? "brand-identity-prompt-kit" :
      category === "Social Media" || category === "Product Ads" ? "viral-visual-ad-pack" :
      "nuvic-prompt-vault"
    ]
  };
});
