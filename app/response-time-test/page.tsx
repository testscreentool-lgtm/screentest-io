import type { Metadata } from 'next'
import Script from 'next/script'
import ResponseTimeTestClient from './ResponseTimeTestClient'

export const metadata: Metadata = {
  title: 'Response Time Test: Monitor Ghosting & Motion Blur | ScreenTest',
  description: 'Free response time test using UFO motion method. Detect ghosting and optimize monitor overdrive.',
  alternates: {
    canonical: 'https://screentest.io/response-time-test',
  },
  openGraph: {
    title: 'Response Time Test | ScreenTest',
    description: 'Test monitor response time and ghosting using UFO method.',
    url: 'https://screentest.io/response-time-test',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Response Time Test | ScreenTest',
    description: 'Free UFO response time and ghosting test.',
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is monitor response time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Response time measures how fast pixels change color. Faster response reduces ghosting."
      }
    },
    {
      "@type": "Question",
      "name": "How do I test response time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use the UFO motion test and look for trailing blur behind moving objects."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ResponseTimeTestClient />
    </>
  )
}
