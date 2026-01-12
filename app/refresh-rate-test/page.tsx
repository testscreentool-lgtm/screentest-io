import { Metadata } from 'next'
import RefreshRateTestClient from './RefreshRateTestClient'

export const metadata: Metadata = {
  title: 'Refresh Rate Test: Check Monitor Hz & Frame Rate | Free Tool',
  description: 'Detect your monitor actual refresh rate (Hz). Verify 60Hz, 120Hz, 144Hz, or 240Hz displays running at correct rates for optimal gaming and viewing.',
  keywords: ['refresh rate test', 'monitor hz', 'fps test', '144hz test', 'refresh rate checker'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/refresh-rate-test' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <RefreshRateTestClient />
}
