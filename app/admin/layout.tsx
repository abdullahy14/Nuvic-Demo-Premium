import Link from "next/link";

const nav = ["dashboard","prompts","assets","products","bundles","recommendations","reviews","pages","analytics","settings"];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid gap-4 lg:grid-cols-[220px_1fr]">
      <aside className="glass h-fit rounded-2xl p-4">
        <h2 className="mb-3 font-semibold">Admin CMS</h2>
        <nav className="space-y-2 text-sm">
          {nav.map((n) => <Link key={n} href={`/admin/${n}`} className="block rounded px-2 py-1 hover:bg-white/10">{n}</Link>)}
        </nav>
      </aside>
      <section>{children}</section>
    </main>
  );
}
