import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Premium Experience | Next-Gen Web Design',
  description:
    'Experience the future of web design with our ultra-premium, accessible, and SEO-optimized platform. Built for performance and beauty with Next.js and Framer Motion.',
  keywords: [
    'premium web design',
    'modern website',
    'SEO optimized',
    'accessible',
    'fast performance',
    'Next.js',
    'Framer Motion',
  ],
  authors: [{ name: 'Premium Team' }],
  creator: 'Premium',
  publisher: 'Premium',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yoursite.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Premium Experience | Next-Gen Web Design',
    description:
      'Ultra-fast, accessible website with 99% performance score. Experience the future today.',
    url: 'https://yoursite.vercel.app',
    siteName: 'Premium',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Experience',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Experience | Next-Gen Web Design',
    description: 'Ultra-fast, accessible website with 99% performance score',
    images: ['/og-image.jpg'],
    creator: '@premium',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
