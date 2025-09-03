import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
