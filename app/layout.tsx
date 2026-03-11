import "@/styles/globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto min-h-screen max-w-7xl px-6 pb-16">
          <header className="sticky top-0 z-20 mb-8 mt-4 flex items-center justify-between rounded-2xl glass px-5 py-3">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/nuvic-logo.svg" alt="Nuvic" width={130} height={34} priority className="h-8 w-auto" />
              <span className="text-sm font-medium tracking-wide text-slate-300">Demo Hub</span>
            </Link>
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
