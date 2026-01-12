import { Metadata } from 'next'
import MonitorTestClient from './MonitorTestClient'

export const metadata: Metadata = {
  title: 'Monitor Test: Complete Display Quality Test Suite | Free Tool',
  description: 'Comprehensive monitor testing suite with 6 color tests, dead pixel detection, uniformity checks, and backlight bleeding tests. Professional QA standard.',
  keywords: ['monitor test', 'display test', 'screen test', 'monitor quality test', 'comprehensive monitor test'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/monitor-test' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <MonitorTestClient />
}
