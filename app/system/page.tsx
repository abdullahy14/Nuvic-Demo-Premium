import Link from "next/link";

export default function FullSystemPage() {
  return (
    <main className="space-y-6">
      <section className="rounded-3xl glass p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-mint">Flagship Offer</p>
        <h1 className="text-4xl font-bold">Nuvic Creative System</h1>
        <p className="mt-3 max-w-3xl text-slate-300">Everything included: premium prompts, assets, workflows, bundles, and ongoing updates. The best-value path for creators who want consistent world-class output.</p>
        <div className="mt-5 flex gap-3">
          <button className="rounded-lg bg-accent px-5 py-3">Purchase Full System</button>
          <Link href="/marketplace" className="rounded-lg border border-white/20 px-5 py-3">Compare Individual Products</Link>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        <div className="glass rounded-2xl p-5"><h2 className="text-xl font-semibold">Estimated value vs price</h2><p className="text-slate-300">$899+ of products and updates for $299.</p></div>
        <div className="glass rounded-2xl p-5"><h2 className="text-xl font-semibold">Best for</h2><p className="text-slate-300">Agencies, serious creators, and teams scaling production.</p></div>
      </section>
    </main>
  );
}
