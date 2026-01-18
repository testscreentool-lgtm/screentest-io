import { Metadata } from 'next'
import Script from 'next/script'
import WhiteScreenClient from './WhiteScreenClient'

export const metadata: Metadata = {
  title: 'White Screen Test: Detect Dark Dead Pixels in 30 Seconds | Free Tool',
  description:
    'Professional white screen test reveals dark dead pixels and brightness uniformity issues in 30 seconds. Free instant testing for monitors, laptops, phones, TVs. Used by 10,000+ monthly.',
  keywords: [
    'white screen test',
    'dark pixel test',
    'dead pixel test',
    'brightness uniformity',
    'display testing',
    'monitor testing',
    'screen tinting',
    'white screen defects',
  ],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/white-screen' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'White Screen Test: Detect Dark Dead Pixels | ScreenTest',
    description:
      'Free white screen test detects dark pixels and brightness uniformity issues in 30 seconds. Professional display testing.',
    type: 'website',
    url: 'https://screentest.io/white-screen',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White Screen Test: Detect Dark Dead Pixels | ScreenTest',
    description:
      'Free white screen test detects dark pixels and brightness uniformity issues in 30 seconds.',
  },
}

// ------------------
// FAQ Schema
// ------------------

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a white screen test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A white screen test displays a pure white image to reveal dark dead pixels, screen tinting, and brightness uniformity problems that may not appear during normal use.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I test my screen using a white screen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open the white screen test at full brightness and look for dark spots, shadows, or color tinting. Any dark dots on a white background indicate dead or stuck pixels.',
      },
    },
    {
      '@type': 'Question',
      name: 'What defects are visible on a white screen test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dark dead pixels, dust under the panel, brightness uniformity issues, and color tinting are most visible on a white screen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is white screen testing safe for my display?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Short white screen tests are safe for LCD, LED, and OLED displays. Avoid leaving static images for extremely long periods on OLED screens.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <Script
        id="white-screen-test-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <WhiteScreenClient />
    </>
  )
}
