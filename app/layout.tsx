// File: /app/layout.tsx
// Root layout with SEO, schema markup, and Poppins + Inter fonts

import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import ToolsMenu from '@/components/ToolsMenu'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'

// Primary font: Poppins for headings and important text
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

// Secondary font: Inter for body text and descriptions
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://screentest.io'),
  title: {
    default: 'ScreenTest - Free Professional Display Testing Tools',
    template: '%s | ScreenTest'
  },
  description: 'Professional display testing suite with 11 free tools. Test for dead pixels, backlight bleeding, color accuracy, and more. Used by 10,000+ monthly.',
  keywords: ['screen test', 'dead pixel test', 'monitor test', 'display test', 'pixel checker', 'black screen', 'white screen', 'color test', 'brightness test', 'screen calibration'],
  authors: [{ name: 'ScreenTest' }],
  creator: 'ScreenTest',
  publisher: 'ScreenTest',
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
  alternates: {
    canonical: 'https://screentest.io',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://screentest.io',
    siteName: 'ScreenTest',
    title: 'ScreenTest - Free Professional Display Testing Tools',
    description: 'Professional display testing suite with 11 free tools. Test for dead pixels, backlight bleeding, and more.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ScreenTest - Display Testing Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScreenTest - Display Testing Tools',
    description: 'Free online tools for professional display testing. Test dead pixels, calibrate monitors, and optimize screen quality.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

// Schema.org structured data
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ScreenTest',
  url: 'https://screentest.io',
  logo: 'https://screentest.io/favicon.svg',
  description: 'Professional display testing tools for monitors, TVs, and mobile devices.',
  sameAs: [
    'https://twitter.com/screentest',
    'https://github.com/screentest',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ScreenTest',
  url: 'https://screentest.io',
  description: 'Free online tools to test dead pixels, calibrate monitors, and optimize display quality.',
  publisher: {
    '@type': 'Organization',
    name: 'ScreenTest',
    logo: {
      '@type': 'ImageObject',
      url: 'https://screentest.io/favicon.svg',
    },
  },
}

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ScreenTest',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1250',
  },
  description: 'Professional display testing suite with 11 free online tools for monitors, TVs, and mobile devices.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
        <ToolsMenu />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
