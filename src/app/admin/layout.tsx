import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Administration AUPROHADA",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-premium-light">
      <header className="bg-white border-b-2 border-gray-200 py-4 px-6 flex justify-between items-center">
        <Link href="/admin" className="font-display font-bold text-royal text-xl">
          AUPROHADA Admin
        </Link>
        <nav>
          <Link
            href="/admin/actualites"
            className="text-premium-dark hover:text-royal font-semibold mr-6"
          >
            Actualités
          </Link>
          <Link
            href="/"
            className="text-premium-dark hover:text-royal font-semibold"
          >
            Voir le site
          </Link>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto py-8">{children}</main>
    </div>
  );
}