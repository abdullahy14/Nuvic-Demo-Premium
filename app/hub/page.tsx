import Link from "next/link";
import { prompts } from "@/data/prompts";
import { assets } from "@/data/assets";
import { products } from "@/data/products";
import { Card } from "@/components/ui/card";
import { getRecommendations } from "@/lib/recommendation-engine";

export default function DemoHubPage() {
  const recs = getRecommendations({ categoryViews: { Branding: 4, "Social Media": 3 }, favorites: 4, productPageViews: 2, promptCopies: 3, searched: ["branding"] });

  return (
    <main className="space-y-6">
      <section className="rounded-2xl glass p-6">
        <h1 className="text-3xl font-bold">Demo Hub Dashboard</h1>
        <p className="text-slate-300">Explore free prompts, preview assets, and discover your best next upgrade path.</p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <Link href="/marketplace" className="rounded-lg border border-white/15 px-3 py-2">View Marketplace</Link>
          <Link href="/system" className="rounded-lg border border-mint/40 px-3 py-2 text-mint">Upgrade to Full System</Link>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card title="Available Demo Prompts"><p className="text-3xl font-bold">{prompts.length}</p></Card>
        <Card title="Demo Assets"><p className="text-3xl font-bold">{assets.length}</p></Card>
        <Card title="Trending Products"><p className="text-3xl font-bold">{products.filter(p=>p.bestseller || p.featured).length}</p></Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card title="Prompt Explorer">
          <div className="space-y-2">
            {prompts.slice(0, 8).map((prompt) => (
              <div key={prompt.id} className="rounded-xl border border-white/10 p-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{prompt.title}</p>
                  <span className="text-xs text-mint">{prompt.access}</span>
                </div>
                <p className="text-xs text-slate-300">{prompt.category} · Popularity {prompt.popularity}</p>
                <p className="mt-1 text-sm text-slate-300">{prompt.access === "PARTIAL" ? `${prompt.previewText} • ${prompt.lockPercentage}% locked.` : prompt.previewText}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Demo Asset Preview Area">
          <div className="space-y-2">
            {assets.slice(0, 6).map((asset) => (
              <div key={asset.id} className="rounded-xl border border-white/10 p-3">
                <p className="font-medium">{asset.title}</p>
                <p className="text-xs text-slate-300">{asset.type} · {asset.access}</p>
                <p className="text-sm text-slate-300">{asset.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <Card title="Recommended for You">
        <div className="grid gap-3 md:grid-cols-2">
          {recs.map((rec) => (
            <Link key={rec.slug} href={`/product/${rec.slug}`} className="rounded-xl border border-white/10 p-4 hover:border-accent/60">
              <p className="font-medium">{rec.title}</p>
              <p className="text-sm text-slate-300">{rec.hook}</p>
              <p className="mt-1 text-xs text-mint">Relevance score: {rec.score}</p>
            </Link>
          ))}
        </div>
      </Card>
    </main>
  );
}
