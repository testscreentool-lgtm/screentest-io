import { Metadata } from 'next'
import Script from 'next/script'
import BrightnessTestClient from './BrightnessTestClient'

export const metadata: Metadata = {
  title: 'Brightness Test: Monitor Nit Measurement & HDR Guide 2025 | ScreenTest',
  description: 'Free monitor brightness test. Understand nit levels, HDR certifications (400/600/1000), uniformity testing. Optimize brightness for gaming and work.',
  keywords: 'brightness test, monitor nits, HDR test, DisplayHDR 400 600 1000, brightness uniformity, nit measurement, HDR gaming, eye strain, monitor calibration',
  openGraph: {
    title: 'Brightness Test: Monitor Nit Measurement & HDR Guide',
    description: 'Test monitor brightness levels, check uniformity, understand HDR certifications. Learn optimal nit levels for gaming and office work.',
    type: 'website',
    url: 'https://screentest.io/brightness-test',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brightness Test: Monitor Nit Measurement & HDR Guide',
    description: 'Test brightness levels, HDR capabilities, and uniformity. Understand DisplayHDR 400/600/1000 certifications.',
  },
  alternates: {
    canonical: 'https://screentest.io/brightness-test',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a good brightness level for a monitor in nits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Monitor brightness recommendations by use: Office work/general use: 250-350 nits sufficient for indoor environments. Gaming SDR content: 300-400 nits for bright, clear visuals without eye strain. Content creation: 350-500 nits for color-critical work in controlled lighting. HDR gaming: 600-1000 nits minimum for true HDR experience (DisplayHDR 600 certification). Bright rooms/daytime use: 500-700 nits to combat ambient light glare. Professional HDR content: 1000+ nits (DisplayHDR 1000) for film/photo editing. Eye strain prevention: 200-300 nits in dark rooms, 400-500 in office lighting. Budget monitors: 250-350 nits typical, premium monitors: 400-600 nits, HDR monitors: 600-1000+ nits."
      }
    },
    {
      "@type": "Question",
      "name": "What is DisplayHDR 400, 600, and 1000?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VESA DisplayHDR certification tiers for monitor brightness and HDR performance: DisplayHDR 400 - 400 nits peak brightness, NO local dimming required, NOT considered true HDR by enthusiasts, makes SDR content look washed out, essentially marketing checkbox. DisplayHDR 600 - 600 nits peak, REQUIRES local dimming (FALD or Mini-LED), first tier delivering genuine HDR experience, 90%+ DCI-P3 color gamut, sweet spot for HDR gaming ($400-700 monitors). DisplayHDR 1000 - 1000 nits peak, advanced local dimming with higher zone count, 90% DCI-P3, minimizes blooming, exceptional contrast, top-tier HDR ($700-1200 monitors). DisplayHDR True Black (OLED) - 400/500/600/1000 variants, perfect blacks (0.0005 nits), per-pixel lighting, no blooming."
      }
    },
    {
      "@type": "Question",
      "name": "How do I test my monitor's brightness?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Monitor brightness testing methods: Software test (basic) - Display fullscreen white, use Windows/macOS brightness slider, observe comfort level at different percentages. Professional measurement requires hardware: Colorimeter ($100-500) like X-Rite ColorMunki, Datacolor Spyder, or Calibrite. Place device on center of screen, run calibration software, measures actual nit output. Professional testing: RTINGS methodology uses Konica Minolta CA-2000, measures 10% window brightness (industry standard), full-screen sustained brightness, peak brightness different APL levels. Uniformity testing: 25-point measurement (5x5 grid), center vs edge brightness delta, acceptable <15% drop in corners. DIY assessment: Fullscreen white at max brightness in dark room, look for hot spots/dim areas."
      }
    },
    {
      "@type": "Question",
      "name": "What brightness should I use for gaming?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gaming brightness recommendations by scenario: Dark room gaming - 200-300 nits (30-50% brightness slider), prevents eye strain during long sessions, maintains contrast. Office/moderate lighting - 300-400 nits (50-70% brightness), balances visibility with comfort, most common gaming scenario. Bright room/daytime - 400-500 nits (70-85% brightness), overcomes ambient light, maintains color accuracy. HDR gaming - Monitor automatically adjusts: SDR content 250-350 nits, HDR highlights 600-1000+ nits depending on certification. Competitive FPS gaming - 350-400 nits recommended, enhances visibility in dark corners without washing out. Eye strain prevention - Lower brightness in evening (200-250 nits), increase daytime (350-450 nits), use bias lighting behind monitor."
      }
    },
    {
      "@type": "Question",
      "name": "Is 400 nits enough for HDR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, 400 nits is NOT enough for true HDR experience. DisplayHDR 400 reality: Only 400 nits peak brightness, no local dimming requirement, cannot display bright highlights AND deep blacks simultaneously, makes SDR content look washed out when HDR enabled, considered marketing checkbox by enthusiasts. Why 400 nits fails HDR: HDR content mastered for 1000-4000 nits, 400 nit monitor tone-maps down aggressively, loses highlight detail and impact, bright scenes like sun/explosions look dim. Minimum for real HDR: DisplayHDR 600 (600 nits + local dimming) delivers noticeable HDR improvement, $400-700 monitor investment. Ideal HDR: DisplayHDR 1000 (1000 nits + advanced FALD) provides dramatic HDR experience, $700-1200 monitors."
      }
    },
    {
      "@type": "Question",
      "name": "What is brightness uniformity and why does it matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brightness uniformity measures evenness of brightness across the screen, tested with fullscreen white. Common issues: 10-15% brightness drop in corners (acceptable for budget monitors), hot spots in center (backlight bleed through), dark patches/vignetting in quadrants (manufacturing defect). Professional measurement: 25-point test (5x5 grid), measure luminance at each point, compare to center reference. Acceptable standards: Budget monitors (<$300): <15% corner drop. Mid-range ($300-700): <10% corner drop, <5% center areas. Professional ($700+): <5% corner drop, <3% center areas. Why it matters: Photo/video editing - color grading inaccurate with uneven brightness, professional work requires <5% deviation. Gaming - less critical, 10-15% acceptable."
      }
    }
  ]
}

export default function BrightnessTestPage() {
  return (
    <>
      <Script
        id="brightness-test-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <BrightnessTestClient />
    </>
  )
}
