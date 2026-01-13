import { Metadata } from 'next'
import Script from 'next/script'
import DeadPixelTestClient from './DeadPixelTestClient'

export const metadata: Metadata = {
  title: 'Dead Pixel Test: Free Instant Detection | ISO 13406-2 Compliant | ScreenTest',
  description: 'Free dead pixel test for all screens. Detect defects in 2 minutes. Essential for new purchases, warranty claims, and used device inspections. ISO 13406-2 compliant testing.',
  keywords: 'dead pixel test, stuck pixel test, pixel test, monitor test, screen test, dead pixel checker, LCD test, ISO 13406-2, pixel defect test',
  openGraph: {
    title: 'Dead Pixel Test: Free Instant Detection | ISO 13406-2 Compliant',
    description: 'Free 2-minute dead pixel test. Essential for new purchases and warranty claims. Test before your 14-30 day return window closes.',
    type: 'website',
    url: 'https://screentest.io/dead-pixel-test',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dead Pixel Test: Free Instant Detection | ISO 13406-2 Compliant',
    description: 'Free 2-minute dead pixel test. Essential for new purchases and warranty claims.',
  },
  alternates: {
    canonical: 'https://screentest.io/dead-pixel-test',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I know if I have a dead pixel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dead pixels appear as tiny black dots that remain constant across all colors. Run solid color tests (red, green, blue, white, black) - a dead pixel shows as black on all colors, while stuck pixels show a specific color. Test in both bright and dark rooms as visibility varies. Dead pixels are most visible on white backgrounds. Use magnification if needed - modern displays have 2-8 million pixels. Location matters: center screen more noticeable than edges/corners."
      }
    },
    {
      "@type": "Question",
      "name": "How many dead pixels are acceptable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ISO 13406-2 Class II standard (used by most manufacturers) allows 2-5 dead pixels per million pixels before warranty coverage. For typical monitors: 1080p (2 million pixels): 2-4 dead pixels allowed. 1440p (3.7 million pixels): 3-7 dead pixels allowed. 4K (8.3 million pixels): 8-16 dead pixels allowed. Reality: Zero defects is ideal. Even one dead pixel center-screen is distracting. Most retailer return policies (14-30 days) allow returns for any defect, overriding manufacturer standards."
      }
    },
    {
      "@type": "Question",
      "name": "Can you fix a dead pixel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "True dead pixels (completely black, no power) cannot be fixed - they require screen replacement averaging $200-650. Dead pixels are permanent hardware failures. Stuck pixels (showing color) have 20-60% fix rate using color-cycling software. Common confusion: Many people call stuck pixels dead pixels. Only truly black pixels are dead. Test with pixel fixer first - if it shows any color it's stuck (potentially fixable). If completely black on all test colors it's dead (not fixable)."
      }
    },
    {
      "@type": "Question",
      "name": "When should I test for dead pixels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Test immediately upon receiving any new display - you have 14-30 days for no-questions-asked returns (varies by retailer). Test timing: Within 24 hours of delivery (best window), before 14-day mark (most retailers), before 30-day mark (Amazon Costco extended), never after return window closes (stuck with manufacturer warranty requiring 3-5+ defects). Used displays: Test before purchasing. Panel lottery reality: 3-7% of new monitors have at least one dead/stuck pixel. Early detection crucial."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between dead and stuck pixels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dead pixels appear completely black on all colors because the transistor receives zero power - they're permanently failed and cannot be fixed without screen replacement. Stuck pixels display a specific color (red green blue or white) because the transistor is stuck in one position - these have 20-60% software fix rate using color-cycling methods. Hot pixels are stuck pixels showing white (all three sub-pixels stuck). Bright pixel defects (stuck showing color) are more noticeable than dark pixel defects (dead showing black)."
      }
    },
    {
      "@type": "Question",
      "name": "Will my warranty cover dead pixels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Coverage depends on manufacturer policy and pixel count. Most require 3-5 dead pixels minimum under ISO 13406-2 Class II standards. Single dead pixels typically not covered unless center-screen. Premium manufacturer policies: Dell UltraSharp: Zero Bright Pixel Guarantee (1 bright pixel = replacement). Samsung: 1+ dead pixel for warranty claim. ASUS: 3-5 dead pixels required. LG: 7+ dead pixels or 3+ in one quadrant. Better option: Use retailer return window (14-30 days) for any defect rather than manufacturer warranty."
      }
    }
  ]
}

export default function DeadPixelTestPage() {
  return (
    <>
      <Script
        id="dead-pixel-test-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <DeadPixelTestClient />
    </>
  )
}
