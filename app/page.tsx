import Link from "next/link";
import { products } from "@/data/products";

export default function LandingPage() {
  return (
    <main className="space-y-8">
      <section className="rounded-3xl glass p-10 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-mint">Premium Creative AI Ecosystem</p>
        <h1 className="mx-auto max-w-3xl text-5xl font-bold">Turn AI tools into a repeatable creative machine.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">Nuvic Demo Hub blends interactive prompts, asset previews, and a product marketplace with intelligent upgrade paths.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/hub" className="rounded-xl bg-accent px-5 py-3 font-medium">Enter Free Demo Hub</Link>
          <Link href="/marketplace" className="rounded-xl border border-white/20 px-5 py-3">Explore Products</Link>
          <Link href="/system" className="rounded-xl border border-mint/40 px-5 py-3 text-mint">Unlock Full Nuvic Creative System</Link>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        <div className="glass rounded-2xl p-5"><h3 className="font-semibold">What you can try</h3><p className="text-sm text-slate-300">30 interactive prompts, 12 preview assets, recommendations, favorites, and premium unlock paths.</p></div>
        <div className="glass rounded-2xl p-5"><h3 className="font-semibold">Why upgrade</h3><p className="text-sm text-slate-300">Free trial shows quality. Paid unlock gives complete systems, packs, and workflows.</p></div>
        <div className="glass rounded-2xl p-5"><h3 className="font-semibold">Social proof</h3><p className="text-sm text-slate-300">4.8 average rating across flagship products with verified creator feedback.</p></div>
      </section>
      <section className="glass rounded-2xl p-6">
        <h2 className="mb-4 text-2xl font-semibold">Product ecosystem preview</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {products.slice(0, 6).map((p) => (
            <Link key={p.slug} href={`/product/${p.slug}`} className="rounded-xl border border-white/10 p-4 hover:border-accent/60">
              <p className="font-medium">{p.title}</p><p className="text-sm text-slate-300">{p.hook}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
