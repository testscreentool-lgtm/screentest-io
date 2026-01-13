import { Metadata } from 'next'
import Script from 'next/script'
import MonitorTestClient from './MonitorTestClient'

export const metadata: Metadata = {
  title: 'Monitor Test: Complete 8-in-1 Display Testing Suite 2025 | ScreenTest',
  description: 'Free comprehensive monitor test suite. 8 professional tests in one tool: dead pixels, backlight bleed, colors, gradients, text clarity, response time, and more.',
  keywords: 'monitor test, screen test, display test, monitor quality test, comprehensive monitor test, LCD test, monitor calibration test, display quality, screen defects',
  openGraph: {
    title: 'Monitor Test: Complete 8-in-1 Display Testing Suite',
    description: 'Professional monitor testing suite with 8 comprehensive tests. Test dead pixels, backlight bleed, colors, and more in minutes.',
    type: 'website',
    url: 'https://screentest.io/monitor-test',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monitor Test: Complete 8-in-1 Display Testing Suite',
    description: 'Free comprehensive monitor test. 8 professional tests detect dead pixels, backlight bleed, color accuracy issues.',
  },
  alternates: {
    canonical: 'https://screentest.io/monitor-test',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I test my monitor for problems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Run comprehensive tests in this order: 1) Dead pixel test (black white red green blue solid colors) look for stuck/dead pixels. 2) Backlight bleed test (fullscreen black in dark room) check corners for light leakage. 3) Color accuracy test (primary colors pure red green blue) verify no color bleeding/tinting. 4) Gradient test (smooth transitions) check for color banding. 5) Text clarity test (small text 10-12pt) verify sharp rendering. 6) Uniformity test (50% gray fullscreen) check brightness consistency. 7) Response time test (moving objects) assess ghosting/trailing. 8) Refresh rate test (verify actual Hz). Complete testing takes 5-10 minutes. Test immediately after purchase (14-30 day return window)."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good monitor response time for gaming?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modern gaming monitors should have 1-5ms response time (GTG - Gray to Gray). Competitive esports gaming (CS2 Valorant): 1-2ms required TN or Fast IPS panels recommended. Fast-paced gaming (FPS racing): 2-4ms recommended modern IPS acceptable. Casual gaming: 5ms+ acceptable VA panels fine for single-player. Response time vs panel type: TN panels: 1-3ms fastest response worst colors limited viewing angles. IPS panels: 4-6ms balanced response excellent colors 178° viewing angles. VA panels: 8-12ms average but 25-30ms dark transitions (black smearing issue). OLED panels: 0.03ms instant response perfect for gaming but burn-in risk. Gaming priority: <5ms eliminates visible ghosting."
      }
    },
    {
      "@type": "Question",
      "name": "Should I calibrate my monitor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Calibrate if: you're a photographer/designer needing color accuracy colors look washed out or oversaturated monitor is >2 years old (settings drift) comparing side-by-side with reference monitor. Skip calibration if: casual gaming/web browsing colors look fine to you budget monitor (<$300) with limited adjustment (calibration won't help much). Calibration methods: Professional hardware ($100-500): X-Rite ColorMunki Datacolor Spyder Calibrite needed for color-critical work. Software calibration (free): Windows Display Color Calibration macOS Display Calibrator basic adjustments only. Settings to adjust: Brightness (250-350 nits office 200-250 dark room) Contrast (70-80% typical) Gamma (2.2 standard 2.4 for dark rooms) Color temperature (6500K D65 standard). Professional work requires hardware calibration monthly."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I test my monitor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Test schedule: Immediately upon delivery (within 24 hours to use retailer return window) every 3 months for first year (detect early degradation) annually after first year (routine maintenance) after physical impact or moving monitor (check for damage) when noticing visual issues (verify problem). New monitor critical testing window: Day 1: Full comprehensive test (all 8 tests). Day 7: Quick retest (dead pixels backlight bleed can develop). Day 14-30: Final test before return window closes. What to monitor over time: Dead pixels developing (manufacturing defects can appear weeks later) backlight bleed worsening (adhesive settling) color accuracy drift (backlight aging) brightness degradation (LEDs dim over time). Most issues appear within first 30 days - test thoroughly."
      }
    },
    {
      "@type": "Question",
      "name": "What refresh rate do I need for gaming?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Refresh rate recommendations by use: Casual gaming: 60-75Hz sufficient smooth enough for most single-player games. Competitive FPS gaming: 144-165Hz minimum for CS2 Valorant Apex Legends Overwatch noticeable advantage. Pro esports: 240-360Hz top 1% competitive players diminishing returns for most. Racing/flight sims: 120-144Hz benefits smooth motion important. Strategy/RPG gaming: 60-75Hz adequate refresh rate less critical. Benefits by Hz: 60Hz: 16.67ms frame time baseline standard. 144Hz: 6.94ms frame time (9.73ms faster) huge improvement for competitive gaming. 240Hz: 4.17ms frame time (2.77ms faster than 144Hz) minor improvement. 360Hz: 2.78ms frame time (1.39ms faster than 240Hz) negligible for most. Factors: GPU must maintain FPS matching Hz (144 FPS for 144Hz). High refresh needs DisplayPort 1.2+ or HDMI 2.0+ cable."
      }
    },
    {
      "@type": "Question",
      "name": "How do I fix monitor color problems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common color issues and fixes: Washed out colors - increase digital vibrance/saturation 10-20% adjust contrast to 75-80% enable full RGB range in GPU settings. Oversaturated colors - lower saturation to 45-50% switch color space from DCI-P3 to sRGB reduce digital vibrance in GPU control panel. Yellow/warm tint - reduce color temperature from 6500K to 5500-6000K adjust RGB levels (lower red increase blue). Blue/cool tint - increase color temperature to 7000-7500K adjust RGB levels (increase red lower blue). One color stronger than others - access monitor OSD adjust individual RGB levels typically: Red 95-100 Green 95-98 Blue 95-100. Uneven colors across screen - this is panel uniformity issue (hardware defect) software cannot fix return monitor if severe. GPU settings critical: Enable full RGB range (0-255 not 16-235). Set color depth to 10-bit if supported. Verify color space matches content (sRGB for web DCI-P3 for HDR)."
      }
    }
  ]
}

export default function MonitorTestPage() {
  return (
    <>
      <Script
        id="monitor-test-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <MonitorTestClient />
    </>
  )
}
