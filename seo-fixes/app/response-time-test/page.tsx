import type { Metadata } from 'next'
import ResponseTimeTestClient from './ResponseTimeTestClient'
import Script from 'next/script'

// P2 FIX: Removed "2025" from title
export const metadata: Metadata = {
  title: 'Response Time Test: Monitor Ghosting & Motion Blur Test | ScreenTest',
  description:
    'Free response time test using UFO method. Test GTG speed, detect ghosting, optimize Overdrive settings. Essential for gaming monitor validation.',
  keywords:
    'response time test, GTG test, ghosting test, motion blur test, UFO test, monitor response time, overdrive test, pixel response, gaming monitor test',
  openGraph: {
    title: 'Response Time Test: Monitor Ghosting & Motion Blur Test',
    description:
      'Test monitor response time using professional UFO method. Detect ghosting, optimize Overdrive, verify GTG specs.',
    url: 'https://screentest.io/response-time-test',
    type: 'website',
    siteName: 'ScreenTest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Response Time Test: Monitor Ghosting & Motion Blur Test',
    description:
      'Free response time test. UFO method detects ghosting. Optimize Overdrive for your gaming monitor.',
  },
  alternates: {
    canonical: 'https://screentest.io/response-time-test',
  },
}



// P2 FIX: JSON-LD moved from client component to server-side rendering
const responsetimetestSchema0 = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is monitor response time and why does it matter?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Response time measures how quickly pixels change colors, typically measured in milliseconds as Gray-to-Gray (GTG). Slow response time (10ms+) causes ghosting - visible trails behind moving objects. Fast response time (1-5ms) delivers crisp motion for gaming. Panel differences: TN panels fastest (1-3ms), IPS medium (4-6ms), VA slowest (8-12ms standard, 25-30ms dark transitions), OLED instant (0.03ms). Most important for: competitive FPS gaming (need 1-2ms), fast racing games (2-4ms acceptable), casual gaming (5ms+ fine). Ghosting appears as smearing or trailing behind moving objects, especially noticeable in dark scenes on VA panels (called 'black smearing')."
                }
              },
              {
                "@type": "Question",
                "name": "How do I test my monitor's response time?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Use UFO test method (industry standard): 1) Run moving UFO animation at your monitor's refresh rate. 2) Track UFO with your eyes (don't stare at fixed spot). 3) Look for trails/ghosting behind UFO - clear UFO = good response time, visible trails = ghosting. 4) Adjust monitor's Overdrive setting in OSD menu (labels: 'Overdrive', 'Response Time', 'Trace Free', 'AMA'). 5) Test each overdrive level: Off/Low shows ghosting (trails), Medium/Normal typically optimal, High/Extreme may show inverse ghosting (bright halos). Professional testing requires high-speed camera (240fps-1000fps) and specialized software. Consumer UFO test reveals visible issues 95% of users experience."
                }
              },
              {
                "@type": "Question",
                "name": "What is a good response time for gaming?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Response time recommendations by gaming type: Competitive esports (CS2, Valorant, Apex): 1-2ms GTG required, prefer TN or Fast IPS panels. Fast-paced gaming (FPS, racing): 2-4ms GTG recommended, modern IPS acceptable. Casual gaming (adventure, strategy): 5ms+ acceptable, VA panels fine. Single-player story games: 8ms+ acceptable, prioritize image quality over speed. Professional esports players: 0.5-1ms with TN panels. Reality check: Advertised '1ms GTG' typically measures 3-6ms average in professional testing (TFTCentral methodology). Worst-case transitions can be 10-15ms. OLED delivers 0.03ms (instant) eliminating all ghosting. Most gamers can't perceive difference between 1ms and 3ms - focus on finding optimal Overdrive setting."
                }
              },
              {
                "@type": "Question",
                "name": "What is monitor ghosting and how do I fix it?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Monitor ghosting is visible trailing/smearing behind moving objects caused by slow pixel response time. Types: 1) Standard ghosting - dark/faded trails (slow pixels), 2) Inverse ghosting - bright halos/coronas (excessive Overdrive), 3) VA black smearing - purple/green trails in dark scenes (25-30ms dark transitions). Fixes: Enable monitor's Overdrive setting to Medium/Normal level (access via OSD physical buttons). Test with UFO animation to find sweet spot - increase until ghosting disappears, decrease if bright halos appear. For VA panels: enable 'Black Equalizer' or 'Shadow Boost' to raise black level 10-15%, reduces response time to 12-18ms. Update monitor firmware and GPU drivers. Ensure using proper cable (DisplayPort for high refresh rate). Hardware limitation: VA panels physically can't match IPS/TN in dark transitions due to liquid crystal physics - consider panel upgrade if severe."
                }
              },
              {
                "@type": "Question",
                "name": "What is overdrive and how do I adjust it?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Overdrive accelerates pixel transitions by applying higher voltage to liquid crystals, reducing response time and ghosting. How to adjust: 1) Access monitor OSD menu using physical buttons. 2) Navigate to Picture/Advanced settings (label varies: 'Overdrive', 'Response Time', 'Trace Free' (ASUS), 'AMA' (BenQ)). 3) Typical levels: Off/Low/Medium/Normal/High/Extreme (or 0-100 numeric). 4) Calibration method: Start at Off (heavy ghosting visible), increase one level at a time, optimal setting is highest level before inverse ghosting appears. Too low: visible ghosting trails. Too high: inverse ghosting (bright halos/coronas, pixel overshoot). Brand-specific: ASUS Trace Free 60-80 optimal, Dell 'Fast' not 'Extreme', BenQ AMA 'High' or 'Premium'. Advanced: Some monitors have Variable Overdrive (adjusts automatically with VRR/G-Sync/FreeSync frame rate changes)."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between GTG and MPRT response time?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "GTG (Gray-to-Gray) measures pixel transition speed between two gray shades in milliseconds. This is hardware pixel response time. Manufacturers advertise GTG because it's lowest number. Real-world: '1ms GTG' typically 3-6ms average, 10-15ms worst-case (professional testing). MPRT (Moving Picture Response Time) measures perceived motion blur combining pixel response AND sample-and-hold effect. MPRT includes how long pixels remain visible on screen during motion tracking. More representative of actual gaming experience. Why both matter: Monitor can have 1ms GTG but high MPRT, still shows motion blur. Sample-and-hold blur formula: 1000 / refresh rate. Even 0ms pixel response (OLED) has sample-and-hold blur: 16.67ms at 60Hz, 6.94ms at 144Hz, 4.17ms at 240Hz. Backlight strobing (ULMB, DyAc, ELMB) reduces MPRT by flashing backlight, makes motion clearer but reduces brightness 40-60%. For gaming: GTG under 5ms + high refresh rate (144Hz+) delivers best motion clarity."
                }
              }
            ]
          }

export default function ResponseTimeTestPage() {
  return (
    <>
      <Script
        id="response-time-test-schema-0"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(responsetimetestSchema0) }}
      />
      <ResponseTimeTestClient />
    </>
  )
}
