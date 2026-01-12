import { Metadata } from 'next'
import ResponseTimeTestClient from './ResponseTimeTestClient'

export const metadata: Metadata = {
  title: 'Response Time Test: Test Display Ghosting & Input Lag | Gaming Monitor',
  description: 'Test display response time and detect ghosting. Verify 1ms, 5ms claims. Essential for gaming monitors. Professional testing tool.',
  keywords: ['response time test', 'ghosting test', 'input lag test', 'gaming monitor', '1ms response', 'pixel response'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/response-time-test' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <ResponseTimeTestClient />
}
