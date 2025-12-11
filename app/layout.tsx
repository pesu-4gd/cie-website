import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeFaviconSwitch from '@/components/ui/ThemeFaviconSwitch';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CIE - Center for Innovation and Entrepreneurship | PES University',
  description: 'Empowering students with innovation, entrepreneurship, and industry connections at PES University.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Prefer browser/system theme-aware favicons. Fallback provided for older browsers. */}
        <link rel="icon" href="/favicon-for-light-theme-browser.ico" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon-for-dark-theme-browser.ico" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon-for-light-theme-browser.ico" />
      </head>
      <body className={inter.className}>
        {/* runtime favicon switch (serves opposite icon of current system theme) */}
        <ThemeFaviconSwitch />
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
