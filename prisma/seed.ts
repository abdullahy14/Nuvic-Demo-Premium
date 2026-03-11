import { PrismaClient } from "@prisma/client";
import { products } from "../data/products";
import { prompts } from "../data/prompts";
import { assets } from "../data/assets";
import { reviews } from "../data/reviews";
import { recommendationRules } from "../data/recommendations";

const prisma = new PrismaClient();

async function main() {
  for (const p of products) {
    const category = await prisma.productCategory.upsert({ where: { name: p.category }, update: {}, create: { name: p.category } });
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: { title: p.title, shortDescription: p.shortDescription, longDescription: p.longDescription, price: p.price, comparePrice: p.compareAtPrice, rating: p.rating, reviewCount: p.reviewCount, tags: p.tags, images: p.images, featured: !!p.featured, bestseller: !!p.bestseller, recommended: !!p.recommended, includedInSystem: !!p.includedInSystem, categoryId: category.id },
      create: { slug: p.slug, title: p.title, shortDescription: p.shortDescription, longDescription: p.longDescription, price: p.price, comparePrice: p.compareAtPrice, rating: p.rating, reviewCount: p.reviewCount, tags: p.tags, images: p.images, featured: !!p.featured, bestseller: !!p.bestseller, recommended: !!p.recommended, includedInSystem: !!p.includedInSystem, categoryId: category.id }
    });
  }

  for (const prompt of prompts) {
    const category = await prisma.promptCategory.upsert({ where: { name: prompt.category }, update: {}, create: { name: prompt.category } });
    await prisma.prompt.create({ data: { title: prompt.title, description: prompt.description, promptText: prompt.fullText, previewText: prompt.previewText, lockPercentage: prompt.lockPercentage, tags: prompt.tags, popularity: prompt.popularity, access: prompt.access, categoryId: category.id } });
  }

  for (const asset of assets) {
    const category = await prisma.assetCategory.upsert({ where: { name: asset.category }, update: {}, create: { name: asset.category } });
    await prisma.asset.create({ data: { title: asset.title, description: asset.description, access: asset.access, previewUrl: asset.previewImage, tags: [asset.type], categoryId: category.id } });
  }

  const seedUser = await prisma.user.upsert({ where: { email: "seed@nuvic.ai" }, update: {}, create: { email: "seed@nuvic.ai", role: "ADMIN", name: "Nuvic Admin" } });

  for (const r of reviews) {
    const product = await prisma.product.findUnique({ where: { slug: r.productSlug } });
    if (!product) continue;
    await prisma.review.create({ data: { rating: r.rating, title: r.title, body: r.body, verified: r.verified, approved: true, helpful: r.helpful, userId: seedUser.id, productId: product.id } });
  }

  for (const rule of recommendationRules) {
    await prisma.recommendationRule.upsert({ where: { id: rule.id }, update: { condition: rule.condition, action: rule.action, weight: rule.weight }, create: { id: rule.id, name: rule.id, condition: rule.condition, action: rule.action, weight: rule.weight } });
  }
}

main().finally(async () => prisma.$disconnect());
