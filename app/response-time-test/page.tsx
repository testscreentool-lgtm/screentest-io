import type { Metadata } from 'next'
import Script from 'next/script'
import ResponseTimeTestClient from './ResponseTimeTestClient'

export const metadata: Metadata = {
  title: 'Response Time Test: Monitor Ghosting & Motion Blur Test 2025 | ScreenTest',
  description: 'Free response time test using UFO method. Test GTG speed, detect ghosting, optimize Overdrive settings. Essential for gaming monitor validation.',
  keywords: 'response time test, GTG test, ghosting test, motion blur test, UFO test, monitor response time, overdrive test, pixel response, gaming monitor test',
  openGraph: {
    title: 'Response Time Test: Monitor Ghosting & Motion Blur Test',
    description: 'Test monitor response time using professional UFO method. Detect ghosting, optimize Overdrive, verify GTG specs.',
    url: 'https://screentest.io/response-time-test',
    type: 'website',
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
        "text": "Response time measures how quickly pixels change colors, typically measured in milliseconds as Gray-to-Gray (GTG). Slow response causes ghosting, fast response improves motion clarity."
      }
    },
    {
      "@type": "Question",
      "name": "How do I test my monitor's response time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use a UFO motion test. Observe trailing shadows behind moving objects and adjust Overdrive settings to minimize ghosting."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good response time for gaming?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For gaming, under 5ms GTG is ideal. Competitive esports players prefer 1–2ms."
      }
    },
    {
      "@type": "Question",
      "name": "What is monitor ghosting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ghosting is trailing blur behind moving objects caused by slow pixel transitions. It is reduced using Overdrive."
      }
    },
    {
      "@type": "Question",
      "name": "What is Overdrive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Overdrive boosts pixel voltage to speed transitions. Too high causes inverse ghosting, too low causes blur."
      }
    }
  ]
}

export default function ResponseTimeTestPage() {
  return (
    <>
      <Script
        id="response-time-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ResponseTimeTestClient />
    </>
  )
}
