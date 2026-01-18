import type { Metadata } from 'next'
import ResponseTimeTestClient from './ResponseTimeTestClient'

export const metadata: Metadata = {
  title: 'Response Time Test: Monitor Ghosting & Motion Blur Test 2025 | ScreenTest',
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

export default function ResponseTimeTestPage() {
  return <ResponseTimeTestClient />
}
