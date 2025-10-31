import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio — Design Engineer",
  description: "Design Engineer crafting emotionally intelligent, AI-powered interfaces.",
  openGraph: {
    title: "Portfolio — Design Engineer",
    description: "Design Engineer crafting emotionally intelligent, AI-powered interfaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <header className="border-b">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-lg font-semibold hover:opacity-70 transition-opacity">
                Portfolio
              </Link>
              <div className="flex gap-6 text-sm">
                <Link href="/work" className="hover:opacity-70 transition-opacity">
                  Work
                </Link>
                <Link href="/about" className="hover:opacity-70 transition-opacity">
                  About
                </Link>
                <Link href="/contact" className="hover:opacity-70 transition-opacity">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t mt-24">
          <div className="container mx-auto px-6 py-8">
            <p className="text-sm text-muted-foreground text-center">
              © {currentYear} Lin Zhang. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
