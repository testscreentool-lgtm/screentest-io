// File: /app/layout.tsx
// Root layout with navigation menu, SEO, and Poppins + Inter fonts

import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import ToolsMenu from '@/components/ToolsMenu'
import Footer from '@/components/Footer'

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
  keywords: ['screen test', 'dead pixel test', 'monitor test', 'display test', 'pixel checker', 'black screen test', 'white screen test', 'screen calibration', 'monitor calibration', 'display testing tools'],
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
    description: 'Professional display testing suite with 11 free tools. Test for dead pixels, backlight bleeding, and more. Used by 10,000+ users monthly.',
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
    creator: '@screentest',
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
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://screentest.io/?s={search_term_string}',
    'query-input': 'required name=search_term_string',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
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
      <body className={`min-h-screen bg-gray-50 ${inter.className}`}>
        <ToolsMenu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
