import "@/styles/globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto min-h-screen max-w-7xl px-6 pb-16">
          <header className="sticky top-0 z-20 mb-8 mt-4 flex items-center justify-between rounded-2xl glass px-5 py-3">
            <Link href="/" className="text-lg font-semibold tracking-wide">Nuvic Demo Hub</Link>
            <nav className="flex gap-4 text-sm text-slate-300">
              <Link href="/hub">Demo Hub</Link>
              <Link href="/marketplace">Marketplace</Link>
              <Link href="/system">Full System</Link>
              <Link href="/admin/dashboard">Admin</Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
