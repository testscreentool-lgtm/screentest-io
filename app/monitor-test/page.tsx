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
        "text": "Run tests in order: Dead pixel test (solid colors), backlight bleed test (black screen in dark room), color uniformity test, text sharpness test, and response time test. Testing takes 5-10 minutes at native resolution."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good monitor response time for gaming?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1-5ms response time (GTG) is ideal. Competitive esports: 1-2ms required. Fast-paced gaming: 2-4ms recommended. Casual gaming: 5ms acceptable. Modern IPS panels achieve 1ms, TN panels 0.5-1ms, VA panels typically 4-7ms."
      }
    },
    {
      "@type": "Question",
      "name": "Should I calibrate my monitor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Calibrate if you're a photographer/designer, colors look off, or monitors don't match. Basic adjustments: brightness 20-50%, contrast 70-80%, gamma 2.2, color temp 6500K. Professional work needs hardware calibration ($100-500)."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I test my monitor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Test immediately upon delivery (within 24 hours for return window), every 3 months first year, annually after, after physical impact, or when noticing issues. 3-7% of new monitors have defects detectable within 30 days."
      }
    },
    {
      "@type": "Question",
      "name": "What refresh rate do I need for gaming?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Casual gaming: 60-75Hz sufficient. Competitive FPS: 144-165Hz minimum. Pro esports: 240-360Hz. 144Hz provides 9.73ms faster frame time vs 60Hz. Requires GPU to maintain matching FPS (144 FPS for 144Hz)."
      }
    },
    {
      "@type": "Question",
      "name": "How do I fix monitor color problems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Washed out: increase saturation 10-20%, adjust contrast to 75-80%. Yellow tint: reduce color temp to 5500-6000K. Oversaturated: switch to sRGB color space. Enable full RGB range (0-255) in GPU settings."
      }
    }
  ]
}
