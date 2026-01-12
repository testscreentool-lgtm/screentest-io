import { Metadata } from 'next'
import BurnInPreventionClient from './BurnInPreventionClient'

export const metadata: Metadata = {
  title: 'Burn-in Prevention: Protect OLED Displays | Free Screensaver Tool',
  description: 'Prevent OLED burn-in with moving screensaver patterns. Protect OLED TV, phone, or monitor from permanent image retention caused by static content.',
  keywords: ['burn-in prevention', 'OLED burn-in', 'screen burn-in', 'image retention', 'OLED protection'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/burn-in-prevention' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <BurnInPreventionClient />
}
