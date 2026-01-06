import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://screentest.io'),
  title: {
    default: 'ScreenTest.io - Professional Display Testing Tools | Free Online',
    template: '%s | ScreenTest',
  },
  description: 'Free online tools to test dead pixels, calibrate monitors, and optimize display quality. Black screen, white screen, dead pixel test, and more. No download required.',
  keywords: ['screen test', 'dead pixel test', 'monitor test', 'black screen', 'white screen', 'display test', 'pixel test', 'screen calibration', 'monitor calibration', 'display testing tools'],
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
    title: 'ScreenTest - Professional Display Testing Tools',
    description: 'Free online tools to test dead pixels, calibrate monitors, and optimize display quality. 12 professional testing tools available instantly.',
    siteName: 'ScreenTest',
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
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE_HERE',
  },
}

// Schema.org structured data
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ScreenTest',
  url: 'https://screentest.io',
  logo: 'https://screentest.io/logo.png',
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
      url: 'https://screentest.io/logo.png',
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
  description: 'Professional display testing suite with 12 free online tools for monitors, TVs, and mobile devices.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href="https://screentest.io" />
        
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
      <body className={poppins.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
