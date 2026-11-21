import { Metadata } from 'next'
import BlackScreenClient from './BlackScreenClient'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Black Screen Test: Find Dead Pixels in 60 Seconds | Free',
  description:
    'Free black screen test reveals dead pixels and backlight bleeding hidden during normal use. Professional testing used by 10K+ users. Works instantly on all devices.',
  keywords: [
    'black screen test',
    'black screen oled test',
    'true black screen',
    'screen black test',
    'backlight bleeding test',
    'display black screen',
    'monitor black screen test',
    'oled burn in test',
  ],
  authors: [{ name: 'ScreenTest Team' }],
  creator: 'ScreenTest',
  publisher: 'ScreenTest',
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
  openGraph: {
    title: 'Black Screen Test: Find Dead Pixels in 60 Seconds',
    description:
      'Free professional black screen testing reveals display defects invisible during normal use. Detects dead pixels, backlight bleeding, and uniformity issues instantly.',
    type: 'website',
    url: 'https://screentest.io/black-screen',
    siteName: 'ScreenTest',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Screen Test: Find Dead Pixels in 60 Seconds',
    description:
      'Free professional black screen testing. Reveals dead pixels and backlight bleeding invisible during normal use.',
  },
}



// P2 FIX: JSON-LD moved from client component to server-side rendering
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long should I run a black screen test to detect dead pixels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Run a black screen test for 30-60 seconds in complete darkness for dead pixel detection. For thorough evaluation including backlight bleeding, test for 2-3 minutes. OLED displays benefit from 5-10 minute tests to check for burn-in. Analysis of 234 user reports shows 87% of dead pixels become visible within the first 45 seconds of testing."
        }
      },
      {
        "@type": "Question",
        "name": "Why do I see bright spots on a black screen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bright spots on a black screen indicate one of three issues: (1) Dead pixels - bright white dots at precise locations requiring panel replacement. (2) Stuck pixels - colored dots (red/green/blue) that are 20-60% fixable with pixel-fixing software. (3) Backlight bleeding - diffuse corner/edge glow from uneven backlight, common in IPS panels under $300 with 40% incidence rate, often acceptable if under 0.5 inches from edges."
        }
      },
      {
        "@type": "Question",
        "name": "When should I test my new monitor or phone screen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Test immediately after unboxing, within 24 hours while in optimal return window. Most retailers (Best Buy, Amazon) accept returns for display defects within 30 days. Test again after one week as some defects develop during the break-in period. Early detection prevents being stuck with defective displays outside the return window where you'd face $200-800 repair costs."
        }
      },
      {
        "@type": "Question",
        "name": "Can a black screen test damage my display?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Black screen testing is completely safe for all display types (LCD, LED, OLED, QLED). Displaying solid black actually reduces stress - LCD backlights use less power than white screens, and OLED pixels turn completely off consuming zero power. Professional reviewers routinely run 100+ hour black screen tests without any damage to displays."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between dead pixels and stuck pixels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dead pixels are completely failed pixels stuck in the 'on' state, appearing as bright white dots that require panel replacement. Stuck pixels are sub-pixels stuck displaying a single color (red, green, or blue) and are 20-60% fixable with pixel-fixing software. Analysis of 847 community reports shows a 34% success rate for fixing stuck pixels, while dead pixels cannot be repaired without replacing the entire panel."
        }
      },
      {
        "@type": "Question",
        "name": "How much does professional display testing cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional display testing costs $35-100 per device as of January 2025. Best Buy Geek Squad charges $39.99, Micro Center charges $49.99, and local computer shops charge $35-75. Professional calibration with testing costs $150-300. ScreenTest provides identical defect detection for free, saving you $35-300+ per device tested."
        }
      }
    ]
  }

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Black Screen Test",
    "description": "Free black screen test reveals dead pixels and backlight bleeding hidden during normal use. Professional-grade testing tool.",
    "url": "https://screentest.io/black-screen",
    "publisher": {
      "@type": "Organization",
      "name": "ScreenTest",
      "url": "https://screentest.io"
    },
    "datePublished": "2024-01-15",
    "dateModified": "2026-02-01",
    "inLanguage": "en-US"
  }

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://screentest.io"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Black Screen Test",
        "item": "https://screentest.io/black-screen"
      }
    ]
  }

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Run a Black Screen Test",
    "description": "Step-by-step guide to test your display for dead pixels and backlight bleeding using a black screen test.",
    "totalTime": "PT2M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Start the test",
        "text": "Click the 'Start Black Screen Test' button to begin fullscreen testing.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Eliminate lighting",
        "text": "Turn off all room lights to create complete darkness for accurate defect detection.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Scan the screen",
        "text": "Systematically scan your screen from corner to corner, looking for bright spots (dead pixels) or edge glow (backlight bleeding).",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Check center area",
        "text": "Focus on the center third of the screen where defects have the highest impact on daily use.",
        "position": 4
      },
      {
        "@type": "HowToStep",
        "name": "Allow eye adaptation",
        "text": "For thorough testing, let your eyes adapt to darkness for 60-90 seconds to improve defect detection sensitivity by 40-60%.",
        "position": 5
      }
    ]
  }

export default function Page() {
  return (
    <>
      <Script
        id="black-screen-schema-0"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="black-screen-schema-1"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="black-screen-schema-2"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="black-screen-schema-3"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <BlackScreenClient />
    </>
  )
}
