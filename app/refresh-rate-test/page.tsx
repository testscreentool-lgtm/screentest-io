import { Metadata } from 'next'
import RefreshRateTestClient from './RefreshRateTestClient'

export const metadata: Metadata = {
  title: 'Refresh Rate Test: Check Monitor Hz & Frame Rate | Free Tool',
  description: 'Detect your monitor actual refresh rate (Hz). Verify 60Hz, 120Hz, 144Hz, or 240Hz displays running at correct rates for optimal gaming.',
  keywords: ['refresh rate test', 'monitor hz', 'fps test', '144hz test', 'refresh rate checker', 'gaming monitor test'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/refresh-rate-test' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Refresh Rate Test: Check Monitor Hz | ScreenTest',
    description: 'Free refresh rate detection. Verify 60Hz, 144Hz, 240Hz operation instantly.',
    type: 'website',
    url: 'https://screentest.io/refresh-rate-test',
  }
}

export default function Page() {
  return <RefreshRateTestClient />
}
