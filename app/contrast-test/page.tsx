import { Metadata } from 'next'
import Script from 'next/script'
import ContrastTestClient from './ContrastTestClient'

export const metadata: Metadata = {
  title: 'Contrast Test: Monitor Contrast Ratio & Gamma Testing 2025 | ScreenTest',
  description: 'Free monitor contrast test. Compare IPS vs VA vs OLED contrast (1000:1, 3000:1, infinite). Verify gamma 2.2/2.4 calibration and black levels.',
  keywords: 'contrast test, monitor contrast ratio, IPS vs VA vs OLED, gamma 2.2 2.4, black level test, native contrast, dynamic contrast, contrast ratio test',
  openGraph: {
    title: 'Contrast Test: Monitor Contrast Ratio & Gamma Testing',
    description: 'Test native contrast ratio, verify gamma calibration, compare panel technologies. Understand IPS 1000:1 vs VA 3000:1 vs OLED infinite contrast.',
    type: 'website',
    url: 'https://screentest.io/contrast-test',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contrast Test: Monitor Contrast Ratio & Gamma Testing',
    description: 'Test contrast ratio, verify gamma curves, compare IPS/VA/OLED black levels. Professional testing patterns.',
  },
  alternates: {
    canonical: 'https://screentest.io/contrast-test',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a good contrast ratio for a monitor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Monitor contrast ratio by panel type: IPS panels: 1000:1 typical (0.4-0.5 nits black, 400-500 nits white), sufficient for office work and color-critical professional tasks, viewing angles 178°. VA panels: 3000:1 to 5000:1 native contrast (0.05-0.15 nits black, 400-600 nits white), premium VA reaches 6000:1, best LCD contrast for movies/dark scenes, 3000:1+ recommended for immersive gaming. OLED panels: Infinite contrast ratio technically (0.0005 nits perfect black, 400-1000 nits white), per-pixel lighting eliminates blooming, ultimate standard for HDR. TN panels: 1000:1 typical, worst contrast and viewing angles but fastest response time."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between native contrast and dynamic contrast?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Native/Static Contrast: Measured with fixed backlight, simultaneous white and black measurement, represents real viewing experience, professional reviews (RTINGS, TFTCentral) only report this. Dynamic Contrast (Marketing): Measured separately, bright scene at max backlight vs dark scene at min backlight, meaningless for actual use - no content displays this way, manufacturers claim 10,000:1 to 100,000:1 (ignore these). Why dynamic is misleading: Backlight adjusts between scenes not within single frame, dark movie scene dims entire screen (lose highlight detail), bright scene raises blacks (lose shadow detail)."
      }
    },
    {
      "@type": "Question",
      "name": "How do I test my monitor's contrast ratio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Testing monitor contrast ratio methods: Visual test (basic): Display fullscreen black in dark room, look for gray/lifted blacks vs true black, edges/corners typically worse than center. Professional measurement (accurate): Requires colorimeter ($100-500): X-Rite ColorMunki, Datacolor Spyder. Methodology: Measure 100% white luminance at center, measure 0% black luminance at same point, calculate ratio (white nits ÷ black nits). Example: 400 nits white ÷ 0.4 nits black = 1000:1 contrast. Software tools: HCFR, DisplayCAL (free). Black level testing: OLED should be 0.0005 nits (perfect), IPS typically 0.3-0.5 nits (grayish blacks), VA typically 0.05-0.15 nits (deep blacks)."
      }
    },
    {
      "@type": "Question",
      "name": "What is gamma 2.2 vs 2.4 for monitors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gamma curve defines relationship between input signal and screen brightness: Gamma 2.2 (sRGB Standard): Standard for web content, Windows default, mastered for typical living room viewing with moderate ambient light, balanced highlights and shadows, appropriate for office environments, best for mixed use (web/office/casual gaming). Gamma 2.4 (Cinema/Darker Rooms): BT.1886 broadcast standard, designed for dark viewing environments (home theater), deeper blacks and richer contrast perception, preferred for HDR content and films, can cause shadow crushing on low-contrast monitors (IPS). Low contrast monitors (IPS ~1000:1): Stick to gamma 2.2. High contrast monitors (VA 3000:1+, OLED infinite): Gamma 2.4 excellent, enhances depth."
      }
    },
    {
      "@type": "Question",
      "name": "Why does OLED have infinite contrast?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OLED achieves infinite contrast through per-pixel organic light emission: Each pixel is self-emissive, no backlight required, pixel turns completely OFF for black (0.0005 nits measured). Contrast: White 400-1000 nits ÷ Black 0.0005 nits = 800,000:1 to 2,000,000:1 (technically infinite). LCD limitations: IPS backlight leaks through liquid crystals (0.3-0.5 nits blacks = 1000:1), VA better (0.05-0.15 nits = 3000:1). OLED advantages: Perfect blacks, no blooming, instantaneous response. Trade-offs: Burn-in risk, lower peak brightness than Mini-LED, 20-30% more expensive."
      }
    },
    {
      "@type": "Question",
      "name": "Does high contrast ratio cause eye strain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contrast ratio and eye strain - it's complicated: High contrast benefits: Better text clarity (black text on white background), improved detail visibility, less squinting required. Potential eye strain causes: Excessive brightness (400+ nits in dark room), not the contrast ratio itself. Extreme contrast transitions. Ambient lighting mismatch: Bright monitor in pitch black room causes pupil dilation stress, use bias lighting (LED strip behind monitor, 6500K). Monitor adjustments for eye comfort: Lower brightness match ambient light (200-250 dark room, 300-400 office, 400-500 bright room). High contrast is NOT inherently problematic - manage brightness and ambient light instead."
      }
    }
  ]
}

export default function ContrastTestPage() {
  return (
    <>
      <Script
        id="contrast-test-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ContrastTestClient />
    </>
  )
}
