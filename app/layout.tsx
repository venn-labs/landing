import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "@/components/ui/Menu";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vennlabs.io'),
  title: {
    default: 'venn | ai-powered creative companion for side projects',
    template: '%s | venn'
  },
  description: 'venn is an ai-powered platform helping side project hustlers and creators think bigger, break through creative blocks, and transform their ideas into reality.',
  keywords: ['AI creative tool', 'side projects', 'creative process', 'AI assistant', 'project ideation', 'creative blocks', 'project management', 'AI brainstorming'],
  authors: [{ name: 'Maya Lekhi' }],
  creator: 'Maya Lekhi',
  publisher: 'venn',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vennlabs.io',
    title: 'venn | ai-powered creative companion for side projects',
    description: 'transform your side project ideas into reality faster.',
    siteName: 'venn',
    images: [
      {
        url: '/logos/logo-1.png',
        width: 1200,
        height: 630,
        alt: 'venn - ai creative companion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'venn | ai-powered creative companion for side projects',
    description: 'transform your side project ideas into reality with ai-powered creative assistance.',
    images: ['/logos/logo-1.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://vennlabs.io',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Menu />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
