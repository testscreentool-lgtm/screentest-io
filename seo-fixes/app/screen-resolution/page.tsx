import { Metadata } from 'next'
import ScreenResolutionClient from './ScreenResolutionClient'
import Script from 'next/script'

// P3 FIX: Added openGraph and twitter metadata
export const metadata: Metadata = {
  title: 'Screen Resolution Test: Check Resolution & Pixel Density | Free Tool',
  description: 'Detect screen actual resolution and pixel density (PPI/DPI). Verify 1080p, 1440p, 4K, or Retina displays configured correctly.',
  keywords: ['screen resolution test', 'resolution checker', 'pixel density', 'PPI calculator', 'DPI test'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/screen-resolution' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Screen Resolution Test: Check Resolution & Pixel Density',
    description: 'Detect your screen actual resolution and pixel density (PPI/DPI). Verify 1080p, 1440p, 4K, or Retina display configuration.',
    type: 'website',
    url: 'https://screentest.io/screen-resolution',
    siteName: 'ScreenTest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Screen Resolution Test: Check Resolution & Pixel Density',
    description: 'Free resolution and pixel density checker. Verify 1080p, 1440p, 4K, or Retina displays.',
  },
}



// P2 FIX: JSON-LD moved from client component to server-side rendering
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a good screen resolution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1920x1080 (Full HD) is standard for 24-inch monitors, 2560x1440 (QHD) ideal for 27-inch, 3840x2160 (4K) for 32-inch+. Higher resolutions provide sharper text and more screen space. Consider pixel density (PPI): aim for 90-110 PPI for general use, 140+ PPI for design work."
        }
      },
      {
        "@type": "Question",
        "name": "How do I check my screen resolution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Check resolution in Display Settings (Windows: Settings > System > Display) or System Preferences (Mac: Apple Menu > System Preferences > Displays). Browser-based tests detect physical pixel count including Retina/HiDPI scaling."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between resolution and screen size?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Resolution is pixel count (1920x1080). Screen size is physical dimensions (24 inches diagonal). Same resolution on different sizes creates different pixel density (PPI). 1080p on 24-inch = sharp, 1080p on 32-inch = pixelated."
        }
      }
    ]
  }

export default function Page() {
  return (
    <>
      <Script
        id="screen-resolution-schema-0"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ScreenResolutionClient />
    </>
  )
}
