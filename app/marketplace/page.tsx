import Link from "next/link";
import { products } from "@/data/products";

export default function MarketplacePage() {
  return (
    <main className="space-y-6">
      <section className="rounded-2xl glass p-6">
        <h1 className="text-3xl font-bold">Nuvic Marketplace</h1>
        <p className="text-slate-300">Browse premium products, bundles, and full-system upgrades tailored to your demo behavior.</p>
      </section>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article key={product.slug} className="glass rounded-2xl p-4">
            <p className="text-xs text-mint">{product.category}</p>
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-sm text-slate-300">{product.shortDescription}</p>
            <p className="mt-2 text-sm"><span className="font-semibold">${product.price}</span> <span className="text-slate-400 line-through">${product.compareAtPrice}</span></p>
            <div className="mt-3 flex gap-2 text-xs">
              {product.includedInSystem && <span className="rounded bg-accent/20 px-2 py-1">Included in Full System</span>}
              {product.bestseller && <span className="rounded bg-mint/20 px-2 py-1">Bestseller</span>}
            </div>
            <div className="mt-4 flex gap-2">
              <Link className="rounded-lg bg-accent px-3 py-2 text-sm" href={`/product/${product.slug}`}>View Details</Link>
              <button className="rounded-lg border border-white/20 px-3 py-2 text-sm">Wishlist</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
