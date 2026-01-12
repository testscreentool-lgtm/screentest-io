import { Metadata } from 'next'
import ResponseTimeTestClient from './ResponseTimeTestClient'

export const metadata: Metadata = {
  title: 'Response Time Test: Check Ghosting & Motion Blur | Free Tool',
  description: 'Test monitor response time and detect ghosting with black-to-white transitions. Verify 1ms, 5ms, or 8ms response times for gaming and fast motion.',
  keywords: ['response time test', 'ghosting test', 'motion blur test', 'monitor response', 'input lag test'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/response-time-test' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <ResponseTimeTestClient />
}
