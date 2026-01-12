import { Metadata } from 'next'
import RefreshRateTestClient from './RefreshRateTestClient'

export const metadata: Metadata = {
  title: 'Refresh Rate Test: Detect Monitor Hz & Frame Rate | Free Tool',
  description: 'Detect your monitor refresh rate and verify 60Hz, 120Hz, 144Hz, 240Hz claims. Test actual vs advertised Hz. Essential for gamers.',
  keywords: ['refresh rate test', 'Hz test', 'monitor refresh rate', 'FPS test', '144Hz test', 'gaming monitor test'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/refresh-rate-test' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <RefreshRateTestClient />
}
