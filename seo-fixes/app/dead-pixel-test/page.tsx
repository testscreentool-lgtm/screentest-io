import type { Metadata } from "next"
import DeadPixelTestClient from "./DeadPixelTestClient"
import Script from 'next/script'

export const metadata: Metadata = {
  title: "Dead Pixel Test – Free Online Screen Checker | ScreenTest",
  description:
    "Run a free dead pixel test online. Detect dead or stuck pixels on monitors, phones, laptops, and TVs in 2 minutes. No download.",
  alternates: {
    canonical: "https://screentest.io/dead-pixel-test",
  },
  openGraph: {
    title: "Dead Pixel Test – Free Online Screen Checker | ScreenTest",
    description:
      "Run a free dead pixel test online. Detect dead or stuck pixels on any screen in 2 minutes.",
    url: "https://screentest.io/dead-pixel-test",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dead Pixel Test – Free Online Screen Checker | ScreenTest",
    description:
      "Run a free dead pixel test online. Detect dead or stuck pixels on any screen in 2 minutes.",
  },
}



// P2 FIX: JSON-LD moved from client component to server-side rendering
const deadpixeltestSchema0 = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I know if I have a dead pixel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dead pixels appear as tiny black dots that remain constant across all colors. Run solid color tests (white, red, green, blue, black) in fullscreen mode. A dead pixel will show as a black dot on white/colored backgrounds. Clean your screen first - dust can mimic dead pixels. Dead pixels occur in roughly 0.0004% of consumer displays (2 per million pixels under ISO 13406-2 Class II standard)."
                }
              },
              {
                "@type": "Question",
                "name": "How many dead pixels are acceptable?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ISO 13406-2 Class II standard (used by most manufacturers) allows 2-5 dead pixels per million pixels. For a 1920x1080 display (2.07 million pixels), 4-10 dead pixels are technically acceptable. However, manufacturers vary: Samsung allows 1+ dead pixels for returns within 14 days, ASUS accepts 3-5 dead pixels, while premium brands like Dell's UltraSharp offer zero bright pixel guarantees."
                }
              },
              {
                "@type": "Question",
                "name": "Can you fix a dead pixel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "True dead pixels (completely black, no power) cannot be fixed - they require screen replacement averaging $200-$400 for laptops. However, stuck pixels (displaying red, green, blue, or white) may be repairable using color-cycling software with 20-60% success rates. If you discover dead pixels within 14-30 days of purchase, warranty replacement or retailer return is your best option."
                }
              },
              {
                "@type": "Question",
                "name": "When should I test for dead pixels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Test immediately upon receiving any new display - you have 14-30 days for no-questions-asked returns at most retailers. Test before buying used devices to avoid scams (sellers hide defects with dark wallpapers). Test every 3-6 months for warranty documentation if defects appear. Always test in-store before finalizing used device purchases."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between dead and stuck pixels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dead pixels appear completely black on all colors because the transistor receives zero power - they're permanent hardware failures. Stuck pixels display a constant color (red, green, blue, or white) because one or more sub-pixels remain 'on' - these may be fixable with software (20-60% success rate). Hot pixels appear white (all sub-pixels stuck on)."
                }
              },
              {
                "@type": "Question",
                "name": "Will my warranty cover dead pixels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Coverage depends on manufacturer policy and pixel count. Most require 3-5 dead pixels minimum under ISO 13406-2 Class II standards. Premium exceptions: Dell UltraSharp (zero bright pixel guarantee), Samsung (1+ pixels within 14 days), Philips Perfect Panel (single pixel replacement). Document defects with photos immediately - policies expire after 30 days."
                }
              }
            ]
          }

const deadpixeltestSchema1 = {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Dead Pixel Test Tool",
            "operatingSystem": "All",
            "applicationCategory": "UtilitiesApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ScreenTest"
            }
          }

export default function DeadPixelTestPage() {
  return (
    <>
      <Script
        id="dead-pixel-test-schema-0"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(deadpixeltestSchema0) }}
      />
      <Script
        id="dead-pixel-test-schema-1"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(deadpixeltestSchema1) }}
      />
      <DeadPixelTestClient />
    </>
  )
}
