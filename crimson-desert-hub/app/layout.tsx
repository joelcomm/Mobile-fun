import type { Metadata } from "next";
import Link from "next/link";
import { DemoBanner } from "@/components/DemoBanner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crimson Desert Hub",
  description:
    "Daily intelligence for Crimson Desert: patches, builds, bosses, and creator signal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <DemoBanner />
        <header className="border-b border-border">
          <div className="container flex h-14 items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              <span className="text-primary">Crimson</span> Desert Hub
            </Link>
            <nav className="flex items-center gap-5 text-sm text-muted-foreground">
              <Link href="/patches" className="hover:text-foreground">Patches</Link>
              <Link href="/bosses" className="hover:text-foreground">Bosses</Link>
              <Link href="/builds" className="hover:text-foreground">Builds</Link>
              <Link href="/creators" className="hover:text-foreground">Creators</Link>
              <Link href="/dashboard" className="hover:text-foreground">Feed</Link>
            </nav>
          </div>
        </header>
        <main className="container py-8">{children}</main>
        <footer className="border-t border-border">
          <div className="container flex h-12 items-center justify-between text-xs text-muted-foreground">
            <span>Unofficial. Not affiliated with Pearl Abyss.</span>
            <span>Credit to the creators we aggregate.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
