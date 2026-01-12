import { Metadata } from 'next'
import MonitorTestClient from './MonitorTestClient'

export const metadata: Metadata = {
  title: 'Monitor Test: Complete Display Testing Suite | Professional QA Tools',
  description: 'Comprehensive monitor testing suite for professional display evaluation. Run all 12 tests sequentially. Complete QA workflow in 5-10 minutes.',
  keywords: ['monitor test', 'display test suite', 'screen testing', 'professional QA', 'comprehensive display test'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/monitor-test' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <MonitorTestClient />
}
