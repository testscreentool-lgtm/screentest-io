import { Metadata } from 'next'
import Script from 'next/script'
import ResponseTimeTestClient from './ResponseTimeTestClient'

export const metadata: Metadata = {
  title: 'Response Time Test: Monitor Ghosting & Motion Blur Test 2025 | ScreenTest',
  description: 'Free response time test using UFO method. Test GTG speed, detect ghosting, optimize Overdrive settings. Essential for gaming monitor validation.',
  keywords: 'response time test, GTG test, ghosting test, motion blur test, UFO test, monitor response time, overdrive test, pixel response, gaming monitor test',
  openGraph: {
    title: 'Response Time Test: Monitor Ghosting & Motion Blur Test',
    description: 'Test monitor response time using professional UFO method. Detect ghosting, optimize Overdrive, verify GTG specs.',
    type: 'website',
    url: 'https://screentest.io/response-time-test',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Response Time Test: Monitor Ghosting & Motion Blur Test',
    description: 'Free response time test. UFO method detects ghosting. Optimize Overdrive for your gaming monitor.',
  },
  alternates: {
    canonical: 'https://screentest.io/response-time-test',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is monitor response time and why does it matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Response time measures how quickly pixels change colors typically measured in milliseconds as Gray-to-Gray (GTG). Slow response (10ms+) causes visible ghosting (trailing shadows behind moving objects). Fast response (1-5ms) delivers crisp motion clarity. Panel technology comparison: TN panels 1-3ms (fastest response but worst colors and viewing angles 160°). IPS panels 4-6ms (balanced response excellent colors 178° viewing). VA panels 8-12ms average but 25-30ms dark transitions (black smearing in dark scenes). OLED panels 0.03ms (instant response perfect blacks). Marketing vs reality: Manufacturers advertise best-case GTG (fastest transition) professional testing reveals average 3-6ms and worst-case 10-15ms. Gaming impact: <5ms eliminates visible ghosting 1-2ms competitive advantage in fast-paced FPS games."
      }
    },
    {
      "@type": "Question",
      "name": "How do I test my monitor's response time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use UFO test method (industry standard developed by Blur Busters): 1) Run moving UFO animation at your monitor's refresh rate (60Hz 144Hz 240Hz). 2) Observe UFO clarity while moving look for trailing shadows duplicate edges blur behind object. 3) Take photo with fast shutter speed (1/1000s+) smartphone cameras work count visible UFO copies (1 copy = excellent 2-3 copies = acceptable 4+ copies = slow response). 4) Adjust monitor Overdrive setting test each level (Off Low Medium High) find optimal setting (fastest without inverse ghosting). Professional measurement requires specialized equipment: Pursuit camera captures multiple frames high-speed photography measures pixel transitions TFTCentral RTINGS methodology gamma-corrected measurements. DIY assessment adequate for most users reveals ghosting issues helps optimize Overdrive."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good response time for gaming?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Response time recommendations by gaming type: Competitive esports (CS2 Valorant Apex): 1-2ms GTG required prefer TN or Fast IPS panels minimize ghosting at 144Hz+ essential for tracking fast movement. Fast-paced gaming (FPS racing fighting): 2-4ms GTG recommended modern IPS panels acceptable balance speed with color quality. Casual gaming (RPG strategy adventure): 5ms+ GTG acceptable VA panels fine for single-player motion clarity less critical than image quality. Professional esports players: 0.5-1ms TN panels (ASUS VG259QM BenQ Zowie) sacrifice colors for speed top 0.1% competitive only. Panel comparison gaming: TN 1-3ms best motion worst everything else. IPS 4-6ms balanced choice 95% of gamers. VA 8-12ms beautiful colors but ghosting in dark scenes. OLED 0.03ms perfect but burn-in risk and high cost. Most important: Match response time to refresh rate (1-2ms for 240Hz 2-4ms for 144Hz 5ms for 60Hz)."
      }
    },
    {
      "@type": "Question",
      "name": "What is monitor ghosting and how do I fix it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Monitor ghosting is visible trailing/smearing behind moving objects caused by slow pixel response time. Types of ghosting: Standard ghosting - dark trails behind objects pixels transition too slowly. Inverse ghosting - bright halos around objects excessive Overdrive overshoot. VA black smearing - purple/green trails in dark scenes VA panel dark transitions extremely slow (25-30ms). Fixes for ghosting: Enable Overdrive (Response Time setting in monitor OSD) start at Medium level increase if ghosting persists decrease if inverse ghosting appears. Optimal Overdrive by brand: ASUS Trace Free 60-80. Dell Fast or Extreme. BenQ AMA High or Premium. LG Fast or Faster. Hardware limitations: Panel technology determines max possible response (VA panels will always have some dark smearing TN inherently faster than IPS). Consider upgrade if: Ghosting severe at optimal Overdrive setting competitive gaming requires <2ms response VA panel black smearing ruins dark games."
      }
    },
    {
      "@type": "Question",
      "name": "What is overdrive and how do I adjust it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Overdrive accelerates pixel transitions by applying higher voltage to liquid crystals reducing response time but risking overshoot (inverse ghosting). How it works: Normal pixel transition gradual voltage change takes 5-10ms. Overdrive applies extra voltage spike forces faster color change reduces transition to 1-4ms. Too much Overdrive causes overshoot pixels change too far then correct visible as bright halos. Overdrive settings by monitor brand: ASUS: Trace Free 0-100 (optimal 60-80). Dell: Normal Fast Extreme (optimal Fast). BenQ: Off AMA High Premium (optimal AMA High). LG: Off Low Medium High Faster (optimal Fast). Samsung: Faster Standard Normal (optimal Faster). Adjustment methodology: Start at Medium/Normal setting. Run UFO test or fast-paced game. If ghosting visible increase one level. If inverse ghosting (halos) visible decrease one level. Optimal when: Minimal trailing behind objects no bright halos or overshoot best clarity in motion. Different settings per refresh rate: Some monitors need different Overdrive at 60Hz vs 144Hz test each."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between GTG and MPRT response time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GTG (Gray-to-Gray) measures pixel transition speed between two gray shades in milliseconds. This is hardware response time represents actual pixel change speed determines ghosting potential. Measured: Time for pixel to change from one luminance to another typically 10% gray to 90% gray professional testing uses 256 transitions reports average. Marketing: Manufacturers advertise best GTG (fastest transition) real-world average is 2-3x slower. MPRT (Moving Picture Response Time) measures perceived motion blur using black frame insertion (BFI) or backlight strobing. This is perceived motion clarity combines pixel response with sample-and-hold blur reduced by flickering backlight. Measured: Camera pursuit photography human perception studies. Which matters more: GTG for understanding panel capability (1-5ms gaming target). MPRT for actual gaming experience (BFI can achieve 1ms MPRT on 5ms GTG panel). Confusion: Some manufacturers advertise 1ms MPRT on 5ms GTG panels (technically true but misleading). Check professional reviews (RTINGS TFTCentral) for gamma-corrected GTG measurements."
      }
    }
  ]
}

export default function ResponseTimeTestPage() {
  return (
    <>
      <Script
        id="response-time-test-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ResponseTimeTestClient />
    </>
  )
}
