import { Metadata } from 'next'
import Script from 'next/script'
import PixelFixerClient from '../pixel-fixer/PixelFixerClient'

export const metadata: Metadata = {
  title: 'Stuck Pixel Test: Check for Stuck Pixels Online | Free Tool',
  description:
    'Free stuck pixel test for all screens. Detect red, green, blue, or white stuck pixels in 2 minutes. Essential for new monitors, warranty checks, and used device inspections.',
  keywords:
    'stuck pixel test, stuck pixel checker, stuck pixel check, test stuck pixels, screen stuck pixel test, monitor stuck pixel test',
  openGraph: {
    title: 'Stuck Pixel Test: Check for Stuck Pixels Online',
    description:
      'Free 2-minute stuck pixel test. Detect red, green, blue, and white stuck pixels on any screen. No download required.',
    type: 'website',
    url: 'https://screentest.io/stuck-pixel-test',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stuck Pixel Test: Check for Stuck Pixels Online',
    description:
      'Free stuck pixel test. Detect stuck pixels on monitors, phones, and TVs in minutes.',
  },
  alternates: {
    canonical: 'https://screentest.io/stuck-pixel-test',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I know if I have a stuck pixel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stuck pixels appear as tiny dots showing a constant color (red, green, blue, or white) on the screen. Run full-screen solid color tests — a stuck pixel stays colored while the rest of the screen changes. They are easiest to see on black backgrounds."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a dead pixel and a stuck pixel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A dead pixel appears completely black on all colors and cannot be fixed. A stuck pixel shows a constant color (red, green, blue, or white) and may be repairable using pixel-fixer software."
      }
    },
    {
      "@type": "Question",
      "name": "Can stuck pixels be fixed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, stuck pixels can sometimes be repaired using color-cycling pixel fixer tools. Community testing shows a 20–60% success rate depending on pixel type and screen technology."
      }
    },
    {
      "@type": "Question",
      "name": "When should I test for stuck pixels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Test immediately after buying a new monitor or phone. Most stores allow returns within 14–30 days for any defect. Also test before buying used devices to avoid hidden screen defects."
      }
    }
  ]
}

export default function StuckPixelTestPage() {
  return (
    <>
      <Script
        id="stuck-pixel-test-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PixelFixerClient />
    </>
  )
}
