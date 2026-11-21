import type { Metadata } from "next"
import ContrastTestClient from "./ContrastTestClient"
import Script from 'next/script'

export const metadata: Metadata = {
  title: "Contrast Test: Monitor Contrast Ratio & Gamma Testing | ScreenTest",
  description:
    "Free monitor contrast test. Compare IPS vs VA vs OLED contrast ratios, verify gamma calibration and black levels. Professional contrast testing patterns.",
  alternates: {
    canonical: "https://screentest.io/contrast-test",
  },
  openGraph: {
    title: "Contrast Test: Monitor Contrast Ratio & Gamma Testing",
    description:
      "Test monitor contrast ratios, gamma calibration and black levels. Compare IPS, VA and OLED panels.",
    url: "https://screentest.io/contrast-test",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contrast Test: Monitor Contrast Ratio & Gamma Testing",
    description:
      "Free contrast test to check black levels, gamma and panel contrast performance.",
  },
}



// P2 FIX: JSON-LD moved from client component to server-side rendering
const contrasttestSchema0 = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a good contrast ratio for a monitor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Monitor contrast ratio by panel type: IPS panels: 1000:1 typical (0.4-0.5 nits black, 400-500 nits white), sufficient for office work and color-critical professional tasks, viewing angles 178°. VA panels: 3000:1 to 5000:1 native contrast (0.05-0.15 nits black, 400-600 nits white), premium VA reaches 6000:1, best LCD contrast for movies/dark scenes, 3000:1+ recommended for immersive gaming. OLED panels: Infinite contrast ratio technically (0.0005 nits perfect black, 400-1000 nits white), per-pixel lighting eliminates blooming, ultimate standard for HDR. TN panels: 1000:1 typical, worst contrast and viewing angles but fastest response time. Usage recommendations: Office/web browsing 1000:1 adequate (IPS fine). Gaming and movies 3000:1+ preferred (VA or OLED). Photo/video editing prioritize color accuracy over contrast (IPS or OLED). HDR content requires high contrast (VA 3000:1 minimum, OLED ideal). Avoid dynamic contrast marketing numbers (10000:1, 50000:1) - only native/static contrast matters."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between native contrast and dynamic contrast?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Native (Static) Contrast vs Dynamic Contrast - marketing vs reality: Native/Static Contrast: Measured with fixed backlight, simultaneous white and black measurement, represents real viewing experience, professional reviews (RTINGS, TFTCentral) only report this. Example: IPS 1000:1 (400 nits white ÷ 0.4 nits black), VA 3000:1 (450 nits ÷ 0.15 nits). Dynamic Contrast (Marketing): Measured separately, bright scene at max backlight vs dark scene at min backlight, meaningless for actual use - no content displays this way, manufacturers claim 10,000:1 to 100,000:1 (ignore these). Why dynamic is misleading: Backlight adjusts between scenes not within single frame, dark movie scene dims entire screen (lose highlight detail), bright scene raises blacks (lose shadow detail), professional work impossible with fluctuating brightness. Real-world impact: Native 1000:1 IPS looks same regardless of content, native 3000:1 VA maintains deep blacks in mixed bright/dark scenes, dynamic contrast creates distracting brightness fluctuations. Trust only native/static contrast specifications."
                }
              },
              {
                "@type": "Question",
                "name": "How do I test my monitor's contrast ratio?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Testing monitor contrast ratio methods: Visual test (basic): Display fullscreen black in dark room, look for gray/lifted blacks vs true black, edges/corners typically worse than center, compare side-by-side with known good monitor. Fullscreen white test: Max brightness at white, then black - eyes adapt to show lifted blacks clearly. Professional measurement (accurate): Requires colorimeter ($100-500): X-Rite ColorMunki, Datacolor Spyder, Calibrite. Methodology: Measure 100% white luminance at center, measure 0% black luminance at same point, calculate ratio (white nits ÷ black nits). Example: 400 nits white ÷ 0.4 nits black = 1000:1 contrast. Software tools: HCFR, DisplayCAL (free), calibration software included with colorimeter. Black level testing: OLED should be 0.0005 nits (perfect), IPS typically 0.3-0.5 nits (grayish blacks), VA typically 0.05-0.15 nits (deep blacks), TN typically 0.4-0.6 nits (worst blacks). Gray scale test: Display 5%, 10%, 25%, 50%, 75%, 95% gray patches, verify smooth progression, look for crushing (lost shadow detail) or clipping (lost highlight detail). Lagom LCD test patterns validate gamma curve accuracy. Professional testing requires dark room (prevent ambient light reflection), 30-minute monitor warmup, native resolution."
                }
              },
              {
                "@type": "Question",
                "name": "What is gamma 2.2 vs 2.4 for monitors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Gamma curve defines relationship between input signal and screen brightness: Gamma 2.2 (sRGB Standard): Standard for web content, Windows default, mastered for typical living room viewing with moderate ambient light, balanced highlights and shadows, appropriate for office environments, best for mixed use (web/office/casual gaming). Gamma 2.4 (Cinema/Darker Rooms): BT.1886 broadcast standard, designed for dark viewing environments (home theater), deeper blacks and richer contrast perception, preferred for HDR content and films, cinematic look, can cause shadow crushing on low-contrast monitors (IPS). Viewing environment determines gamma: Bright room (office lighting): Gamma 2.2 prevents washout, maintains visibility. Dark room (home theater): Gamma 2.4 enhances perceived contrast, complements panel's native contrast. Professional use: sRGB (similar to 2.2) for web design, Rec.709 Gamma 2.4 for video editing, DCI-P3 for film color grading. Low contrast monitors (IPS ~1000:1): Stick to gamma 2.2, 2.4 crushes shadows revealing poor blacks. High contrast monitors (VA 3000:1+, OLED infinite): Gamma 2.4 excellent, enhances depth without crushing. Monitor OSD typically offers gamma presets: 1.8, 2.0, 2.2, 2.4, 2.6 - test with Lagom gamma pattern to verify accurate. Most content mastered for 2.2, but intended to be viewed at 2.4 in dark rooms (contrast expansion of ~1.1)."
                }
              },
              {
                "@type": "Question",
                "name": "Why does OLED have infinite contrast?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "OLED achieves infinite contrast through per-pixel organic light emission: How OLED works: Each pixel is self-emissive organic material (W-OLED: White + color filters, QD-OLED: Quantum Dot color conversion), no backlight required, pixel turns completely OFF for black (0.0005 nits measured vs 0.0000 theoretical). Contrast calculation: White 400-1000 nits ÷ Black 0.0005 nits = 800,000:1 to 2,000,000:1, technically infinite (any number ÷ 0 = infinity), but practical measurement ~0.0005 nits minimum. LCD limitations by comparison: IPS backlight leaks through liquid crystals (0.3-0.5 nits blacks = 1000:1 contrast), VA better light blocking (0.05-0.15 nits = 3000-5000:1), even with local dimming, zones (8-1000) cause blooming around bright objects. OLED advantages: Perfect blacks in dark scenes, no backlight bleed or IPS glow, no blooming halos, instantaneous pixel response (0.03ms GTG), eliminates all LCD artifacts. OLED trade-offs: Burn-in risk with static UI, lower peak brightness than Mini-LED (400-1000 nits vs 1200-2000 nits), 20-30% more expensive ($800-1200 monitors), PWM flicker potential. DisplayHDR True Black certification: True Black 400/500/600 for OLED, requires 0.0005 nits max black, 400-600 nits peak white. New True Black 1000 (2025): 1000 nits peak, 500 nits sustained fullscreen. Real-world impact: Dark movie scenes actually dark (space, horror, noir), HDR highlights pop against perfect blacks, infinite contrast enables true HDR without LCD compromises."
                }
              },
              {
                "@type": "Question",
                "name": "Does high contrast ratio cause eye strain?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Contrast ratio and eye strain relationship - it's complicated: High contrast benefits: Better text clarity (black text on white background), improved detail visibility, less squinting required, reduced cognitive load reading, optimal for dark room viewing. Potential eye strain causes: Excessive brightness (400+ nits in dark room), not the contrast ratio itself - lower brightness to 200-250 nits at night. Extreme contrast transitions (pure white to pure black rapid changes), flickering or PWM dimming (OLED 60-120Hz), blue light excess at high brightness. Ambient lighting mismatch: Bright monitor in pitch black room causes pupil dilation stress, use bias lighting (LED strip behind monitor, 6500K, 10-15% monitor brightness), reduces perceived eye strain 30-40%. Monitor adjustments for eye comfort: Lower brightness match ambient light (200-250 dark room, 300-400 office, 400-500 bright room), enable blue light filter evening use, position monitor 20-30 inches away, top of screen at eye level. Contrast by use case: Office work (8+ hours): Moderate contrast fine (IPS 1000:1), prioritize brightness control and blue light filter. Gaming (long sessions): Higher contrast acceptable (VA 3000:1), but lower brightness in dark room. Professional editing: Color accuracy over contrast, calibrated environment essential. Panel comparison for comfort: IPS (1000:1): Raised blacks less straining in bright rooms, glow visible dark rooms. VA (3000:1+): Deep blacks can strain if room too bright (excessive pupil dilation), excellent with proper bias lighting. OLED (infinite): Perfect blacks very comfortable with bias lighting, avoid in bright rooms (OLED dimmer, pupils dilate). Recommendation: High contrast is NOT inherently problematic - manage brightness and ambient light instead."
                }
              }
            ]
          }

export default function ContrastTestPage() {
  return (
    <>
      <Script
        id="contrast-test-schema-0"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contrasttestSchema0) }}
      />
      <ContrastTestClient />
    </>
  )
}
