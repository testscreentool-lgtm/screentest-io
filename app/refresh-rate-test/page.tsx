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

const schemaData = 
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I test my monitor's refresh rate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use a browser-based refresh rate test tool. Open the test in fullscreen, keep the tab active, and run for 5+ seconds. The test uses requestAnimationFrame API to measure your display's actual Hz (60Hz, 144Hz, 240Hz, 360Hz)."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my 144Hz monitor stuck at 60Hz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common causes: Wrong cable (HDMI 1.4 limited to 60Hz at 1440p), Windows not configured to 144Hz, monitor OSD settings need DisplayPort 1.2/1.4 enabled, outdated GPU drivers, or resolution too high for cable bandwidth. Check Windows Display Settings and use DisplayPort cable."
      }
    },
    {
      "@type": "Question",
      "name": "What cable do I need for 144Hz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For 144Hz: DisplayPort 1.2+ (recommended) or HDMI 2.0+. DisplayPort 1.4 supports 1440p 240Hz and 4K 144Hz. HDMI 2.1 supports 1440p 240Hz. Avoid HDMI 1.4 which limits 1440p to 60Hz. Use quality cables ($10-15)."
      }
    },
    {
      "@type": "Question",
      "name": "How do I enable 144Hz in Windows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Right-click desktop → Display settings → Advanced display → Choose your monitor → Select 144Hz refresh rate → Apply. If 144Hz not shown, check your cable (need DisplayPort 1.2+ or HDMI 2.0+) and update GPU drivers."
      }
    },
    {
      "@type": "Question",
      "name": "Is 144Hz worth it over 60Hz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes for gaming. 144Hz provides 6.94ms frame time vs 60Hz at 16.67ms (9.73ms faster). Huge improvement for competitive FPS games, smoother mouse movement, and reduced eye strain. Requires mid-range GPU (RTX 3060+) to maintain 100+ FPS."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between 144Hz and 240Hz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "240Hz is 2.77ms faster than 144Hz per frame. Most people notice 60Hz→144Hz immediately, but only 30-40% detect 144Hz→240Hz difference. Worth it for pro esports players. 144Hz is the sweet spot for 99% of gamers."
      }
    }
  ]
}
