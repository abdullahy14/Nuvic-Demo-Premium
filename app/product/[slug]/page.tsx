import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { reviews } from "@/data/reviews";

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const productReviews = reviews.filter((r) => r.productSlug === product.slug);

  return (
    <main className="space-y-6">
      <section className="glass rounded-2xl p-6">
        <p className="text-xs text-mint">{product.category}</p>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="mt-2 text-slate-300">{product.longDescription}</p>
        <p className="mt-3 text-2xl font-semibold">${product.price} <span className="text-base text-slate-400 line-through">${product.compareAtPrice}</span></p>
        <div className="mt-4 flex gap-2">
          <button className="rounded-lg bg-accent px-4 py-2">Buy Now</button>
          <button className="rounded-lg border border-white/20 px-4 py-2">Add to Wishlist</button>
          <Link href="/system" className="rounded-lg border border-mint/40 px-4 py-2 text-mint">Upgrade to Full System</Link>
        </div>
      </section>

      {product.includedInSystem && (
        <section className="rounded-2xl border border-mint/40 bg-mint/10 p-5">
          Buy this individually, or unlock this plus everything else in the full Nuvic Creative System.
        </section>
      )}

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="glass rounded-2xl p-5">
          <h2 className="mb-2 text-xl font-semibold">What’s included</h2>
          <ul className="space-y-1 text-sm text-slate-300">{product.includedItems.map((i) => <li key={i}>• {i}</li>)}</ul>
        </div>
        <div className="glass rounded-2xl p-5">
          <h2 className="mb-2 text-xl font-semibold">Who it’s for</h2>
          <p className="text-slate-300">{product.audience}</p>
          <h3 className="mt-3 font-medium">Use cases</h3>
          <ul className="text-sm text-slate-300">{product.useCases.map((u) => <li key={u}>• {u}</li>)}</ul>
        </div>
      </section>

      <section className="glass rounded-2xl p-5">
        <h2 className="mb-3 text-xl font-semibold">Ratings, Reviews & Comments</h2>
        <p className="text-sm text-slate-300">Average {product.rating} ({product.reviewCount} reviews)</p>
        <div className="mt-3 space-y-2">{productReviews.map((r) => <div key={r.title} className="rounded-xl border border-white/10 p-3 text-sm"><p className="font-medium">{r.title} · {"★".repeat(r.rating)}</p><p className="text-slate-300">{r.body}</p></div>)}</div>
      </section>
    </main>
  );
}
