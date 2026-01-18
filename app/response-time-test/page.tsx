import type { Metadata } from 'next'
import Script from 'next/script'
import ResponseTimeTestClient from './ResponseTimeTestClient'

export const metadata: Metadata = {
  title: 'Response Time Test: Monitor Ghosting & Motion Blur Test | ScreenTest',
  description: 'Free response time test. Detect ghosting and motion blur on any monitor.',
  alternates: {
    canonical: 'https://screentest.io/response-time-test',
  },
  openGraph: {
    title: 'Response Time Test: Monitor Ghosting & Motion Blur Test',
    description: 'Free response time test. Detect ghosting and motion blur.',
    url: 'https://screentest.io/response-time-test',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Response Time Test',
    description: 'Free response time and ghosting test for monitors.',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is monitor response time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Response time is how fast a pixel changes color. Faster response reduces motion blur."
      }
    },
    {
      "@type": "Question",
      "name": "How do I test response time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use a UFO motion test and look for trailing shadows behind moving objects."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good response time for gaming?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under 5ms GTG is good for gaming. Competitive players prefer 1 to 2ms."
      }
    }
  ]
}

export default function ResponseTimeTestPage() {
  return (
    <>
      <Script
        id="response-time-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ResponseTimeTestClient />
    </>
  )
}
