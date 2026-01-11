import { Metadata } from 'next'
import BlackScreenClient from './BlackScreenClient'

// ============================================
// METADATA (SEO Optimized)
// ============================================
export const metadata: Metadata = {
  title: 'Black Screen Test: Find Dead Pixels in 60 Seconds | Free Display Testing',
  description: 'Free professional black screen test reveals dead pixels, backlight bleeding, and display defects in 30-60 seconds. Voice search optimized. Used by 10,000+ monthly. Works on all devices instantly.',
  keywords: [
    'black screen test',
    'dead pixel test',
    'monitor test',
    'screen test',
    'display test',
    'backlight bleeding test',
    'pixel checker',
    'screen defect test',
    'OLED test',
    'IPS monitor test'
  ],
  authors: [{ name: 'ScreenTest' }],
  openGraph: {
    title: 'Black Screen Test - Find Dead Pixels & Backlight Bleeding in 60 Seconds',
    description: 'Free professional display testing. Detect dead pixels and backlight bleeding instantly. Works on monitors, laptops, phones, TVs.',
    url: 'https://screentest.io/black-screen',
    siteName: 'ScreenTest',
    type: 'website',
    images: [
      {
        url: 'https://screentest.io/og-black-screen.jpg',
        width: 1200,
        height: 630,
        alt: 'Black Screen Test - Free Display Testing Tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Screen Test - Find Dead Pixels in 60 Seconds',
    description: 'Free professional display testing tool. Detect display defects instantly.',
    images: ['https://screentest.io/og-black-screen.jpg']
  },
  alternates: {
    canonical: 'https://screentest.io/black-screen'
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
}

// ============================================
// SERVER COMPONENT (Exports Metadata)
// ============================================
export default function BlackScreenPage() {
  return <BlackScreenClient />
}
