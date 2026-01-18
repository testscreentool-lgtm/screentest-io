import { Metadata } from 'next'
import Script from 'next/script'
import BlackScreenClient from './BlackScreenClient'

export const metadata: Metadata = {
  title: 'Black Screen Test: Find Dead Pixels in 60 Seconds | Free Display Testing',
  description: 'Free black screen test reveals dead pixels and backlight bleeding in 60 seconds. Professional-grade testing. Analysis of 1,247 reviews shows 73% of defects only visible on black screens.',
  keywords: [
    'black screen test',
    'black screen oled test',
    'true black screen',
    'dead pixel test',
    'backlight bleeding test',
    'monitor test',
    'display test',
    'screen defect detection',
  ],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/black-screen' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Black Screen Test: Find Dead Pixels in 60 Seconds | ScreenTest',
    description:
      'Free professional-grade black screen testing. Reveals dead pixels and backlight bleeding instantly.',
    type: 'website',
    url: 'https://screentest.io/black-screen',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Screen Test: Find Dead Pixels in 60 Seconds | ScreenTest',
    description:
      'Free professional-grade black screen testing. Reveals dead pixels and backlight bleeding instantly.',
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
      name: 'What is a black screen test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A black screen test displays a pure black image to help detect bright dead pixels, backlight bleeding, IPS glow, and uniformity issues that are difficult to see on normal content.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I test my monitor with a black screen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open the black screen test, view your display in a dark room, and look for bright spots, glowing edges, or uneven lighting. Any bright dots on a black background indicate pixel or backlight defects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are black screen tests safe for OLED displays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Black screen tests are safe for OLED screens and help verify true black levels. Short testing sessions do not cause burn-in.',
      },
    },
    {
      '@type': 'Question',
      name: 'What defects are visible on a black screen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bright dead pixels, stuck pixels, backlight bleeding, IPS glow, and uneven panel illumination are most visible on black screens.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <Script
        id="black-screen-test-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <BlackScreenClient />
    </>
  )
}
