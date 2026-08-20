import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { logoutAction } from "@/app/admin/actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <header className="border-b border-charcoal/10 bg-charcoal text-cream">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <div>
            <Link href="/admin" className="font-display text-xl">
              Rodizio Grill <span className="text-gold">Calafate</span>
            </Link>
            <p className="text-[10px] uppercase tracking-[0.25em] text-cream/45">
              Panel de shows
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.18em]">
            <Link href="/" className="text-cream/60 transition hover:text-gold">
              Ver web
            </Link>
            <form action={logoutAction}>
              <button
                type="submit"
                className="text-cream/60 transition hover:text-gold"
              >
                Salir
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-5 py-10">{children}</main>
    </div>
  );
}
