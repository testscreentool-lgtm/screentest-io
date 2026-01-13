import { Metadata } from 'next'
import Script from 'next/script'
import RefreshRateTestClient from './RefreshRateTestClient'

export const metadata: Metadata = {
  title: 'Refresh Rate Test: Verify Your Monitor Hz | 144Hz 240Hz 360Hz | ScreenTest',
  description: 'Free browser-based refresh rate test. Verify your monitor is running at true 144Hz, 240Hz, or 360Hz. 40-60% of users stuck at 60Hz without realizing it.',
  keywords: 'refresh rate test, Hz test, 144Hz test, 240Hz test, monitor refresh rate, FPS test, frame rate test, monitor Hz checker, gaming monitor test',
  openGraph: {
    title: 'Refresh Rate Test: Verify Your Monitor Hz',
    description: 'Test your true refresh rate. Verify 144Hz, 240Hz, 360Hz. 40-60% of users unknowingly stuck at 60Hz. Free instant testing.',
    type: 'website',
    url: 'https://screentest.io/refresh-rate-test',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refresh Rate Test: Verify Your Monitor Hz',
    description: 'Free refresh rate test. Verify true 144Hz/240Hz/360Hz. 40-60% stuck at 60Hz unknowingly.',
  },
  alternates: {
    canonical: 'https://screentest.io/refresh-rate-test',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I test my monitor's refresh rate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use a browser-based refresh rate test tool to measure actual Hz. The test uses requestAnimationFrame API to count frames rendered per second. Testing methodology: Open test in fullscreen mode browser measures frame intervals over 3-5 seconds calculates average Hz displays detected refresh rate (60Hz 120Hz 144Hz 240Hz 360Hz). Important: Test reflects browser's rendering rate limited by slowest component (monitor GPU browser V-Sync). Verification: Windows Display Settings shows configured Hz (but doesn't guarantee actual output). Hardware like UFO Test Blur Busters provides visual confirmation. Discrepancy troubleshooting: If test shows 60Hz but monitor is 144Hz check cable (need DisplayPort 1.2+ or HDMI 2.0+) verify Windows display settings (Advanced Display) disable V-Sync in games (can limit to 60Hz)."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my 144Hz monitor stuck at 60Hz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "5 common causes for 144Hz stuck at 60Hz affecting 40-60% of users: 1) Wrong cable - HDMI 1.4 limited to 60Hz at 1440p need DisplayPort 1.2+ (supports 1440p 165Hz) or HDMI 2.0+ (supports 1440p 144Hz). 2) Windows not configured - Windows defaults to 60Hz even with capable hardware. Fix: Right-click desktop → Display settings → Advanced display → Refresh rate → Select 144Hz. 3) Monitor OSD settings - Some monitors require DisplayPort version selection in on-screen menu. Fix: Press monitor buttons → Settings/System → DisplayPort Version → Select 1.2 or 1.4. 4) GPU drivers outdated - Old drivers may not detect high refresh rates. Fix: Update NVIDIA/AMD drivers from official site. 5) Resolution too high - Cable bandwidth insufficient for resolution + Hz combination. Fix: Lower resolution or upgrade to DisplayPort 1.4."
      }
    },
    {
      "@type": "Question",
      "name": "What cable do I need for 144Hz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cable requirements by resolution and Hz: DisplayPort 1.2+ (recommended) - 1080p 240Hz 1440p 165Hz 4K 75Hz most reliable for high refresh rates $8-15 for quality cable. DisplayPort 1.4 - 1080p 360Hz 1440p 240Hz 4K 144Hz 8K 60Hz future-proof option $12-20. HDMI 2.0 - 1080p 240Hz 1440p 144Hz 4K 60Hz common on GPUs 2016+ adequate for most $8-12. HDMI 2.1 - 1080p 360Hz 1440p 240Hz 4K 144Hz 8K 60Hz newest standard $15-25. HDMI 1.4 (avoid) - 1080p 144Hz but 1440p limited to 60Hz 4K 30Hz insufficient for modern gaming. Cable length matters: Under 6 feet - any quality cable works fine. 6-10 feet - certified cables recommended. 10+ feet - signal degradation risk use active/fiber cables. Verify: Check GPU ports (DisplayPort preferred for 144Hz+) confirm monitor input (some only have HDMI 2.0 on one port)."
      }
    },
    {
      "@type": "Question",
      "name": "How do I enable 144Hz in Windows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Windows 11/10 configuration steps: 1) Right-click desktop → Display settings. 2) Scroll to 'Advanced display' settings. 3) Select your monitor (if multiple displays). 4) Click 'Display adapter properties'. 5) Monitor tab → Screen refresh rate dropdown. 6) Select 144Hz (or 120Hz 165Hz 240Hz). 7) Click Apply then OK. 8) Confirm changes (reverts in 15 seconds if not confirmed). Verification: Use browser refresh rate test confirms actual Hz GPU control panel (NVIDIA Control Panel or AMD Radeon Settings) check active resolution shows Hz. Troubleshooting missing 144Hz option: Check cable (must be DisplayPort 1.2+ or HDMI 2.0+) update GPU drivers (download from NVIDIA/AMD official site) try different display port on GPU (some ports limited) check monitor OSD (may need to enable high refresh rate mode) verify resolution (lower resolution if needed)."
      }
    },
    {
      "@type": "Question",
      "name": "Is 144Hz worth it over 60Hz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "144Hz vs 60Hz differences significant for most users: Frame time: 60Hz = 16.67ms per frame 144Hz = 6.94ms (9.73ms faster visual update) 240Hz = 4.17ms. Perceived smoothness: 60Hz to 144Hz is MASSIVE improvement universally noticeable 144Hz to 240Hz is minor improvement only top players notice. Gaming benefits: Competitive FPS (CS2 Valorant) - 144Hz provides measurable advantage lower input lag smoother tracking easier to land shots. Fast-paced games (racing shooters) - significant improvement in motion clarity. Slow-paced games (strategy RPG) - minimal benefit 60Hz sufficient. Desktop use benefits: Smoother mouse cursor movement less eye strain during scrolling improved overall fluidity. Cost consideration: 144Hz monitors $180-300 worth upgrade for serious gamers. 240Hz+ monitors $350-600 diminishing returns unless top 1% competitive. GPU requirements: Must maintain high FPS to benefit (100+ FPS for 144Hz) mid-range GPU minimum (RTX 3060 or better)."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between 144Hz and 240Hz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "144Hz vs 240Hz comparison for informed purchasing: Frame time difference: 144Hz = 6.94ms 240Hz = 4.17ms (2.77ms faster only 40% improvement vs 60Hz to 144Hz jump). Perceived difference: 60Hz to 144Hz: Dramatic immediately obvious everyone notices. 144Hz to 240Hz: Subtle requires side-by-side comparison many can't tell difference. Who benefits from 240Hz: Top 1% competitive players (Global Elite Radiant) high refresh rate enthusiasts unlimited budget seekers of diminishing returns. Who should stick with 144Hz: 99% of gamers (including high rank competitive) budget-conscious buyers ($150-200 savings) balanced performance seekers. Real performance impact: Competitive advantage 144Hz vs 240Hz is minimal studies show <1% accuracy improvement professional players split on whether it matters. GPU requirements: 240Hz needs 200+ FPS to utilize fully requires high-end GPU (RTX 4070+ or better) CPU bottleneck more likely at 240Hz. Price comparison: 144Hz 1080p: $180-250 1440p: $300-400. 240Hz 1080p: $300-400 1440p: $450-600. Verdict: 144Hz is sweet spot for 99% of users."
      }
    }
  ]
}

export default function RefreshRateTestPage() {
  return (
    <>
      <Script
        id="refresh-rate-test-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RefreshRateTestClient />
    </>
  )
}
