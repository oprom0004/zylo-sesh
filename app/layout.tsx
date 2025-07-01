import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ZYLO Nicotine Pouches - Premium Tobacco-Free Experience',
  description: 'Discover ZYLO premium nicotine pouches. Tobacco-free, discreet, and available in multiple flavors. Subscribe and save with our convenient delivery service.',
  keywords: 'nicotine pouches, tobacco-free, ZYLO, premium, flavors, subscription',
  authors: [{ name: 'ZYLO' }],
  robots: 'index, follow',
  openGraph: {
    title: 'ZYLO Nicotine Pouches - Premium Tobacco-Free Experience',
    description: 'Discover ZYLO premium nicotine pouches. Tobacco-free, discreet, and available in multiple flavors.',
    url: 'https://zylo-clone.com',
    siteName: 'ZYLO',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ZYLO Nicotine Pouches',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZYLO Nicotine Pouches - Premium Tobacco-Free Experience',
    description: 'Discover ZYLO premium nicotine pouches. Tobacco-free, discreet, and available in multiple flavors.',
    images: ['/images/twitter-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-montserrat antialiased bg-white text-zylo-dark">
        {children}
      </body>
    </html>
  )
}