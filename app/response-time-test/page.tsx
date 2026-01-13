import { Metadata } from 'next'
import ResponseTimeTestClient from './ResponseTimeTestClient'

export const metadata: Metadata = {
  title: 'Response Time Test: UFO Motion Blur & Ghosting Test 2025 | ScreenTest',
  description: 'Free UFO response time test. Detect monitor ghosting and motion blur. Calibrate Overdrive settings for gaming. Test GTG response time 1ms-5ms.',
  keywords: 'response time test, UFO test, monitor ghosting, motion blur test, GTG test, overdrive calibration, pixel response time, gaming monitor test, inverse ghosting, black smearing',
  openGraph: {
    title: 'Response Time Test: UFO Motion Blur & Ghosting Test',
    description: 'UFO motion test reveals ghosting and motion blur. Calibrate your monitor\'s Overdrive for optimal gaming clarity. Industry-standard testing.',
    type: 'website',
    url: 'https://screentest.io/response-time-test',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Response Time Test: UFO Motion Blur & Ghosting Test',
    description: 'Test monitor response time and ghosting. UFO motion test with Overdrive calibration guide.',
  },
  alternates: {
    canonical: 'https://screentest.io/response-time-test',
  },
}

export default function ResponseTimeTestPage() {
  return <ResponseTimeTestClient />
}
