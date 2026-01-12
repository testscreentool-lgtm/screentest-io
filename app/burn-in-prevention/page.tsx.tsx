import { Metadata } from 'next'
import BurnInPreventionClient from './BurnInPreventionClient'

export const metadata: Metadata = {
  title: 'Burn-in Prevention: OLED Screensaver Patterns | Protect Your Display',
  description: 'Prevent OLED burn-in with moving screensaver patterns. Protect your display from permanent image retention. Free OLED care tool.',
  keywords: ['burn-in prevention', 'OLED protection', 'screen burn prevention', 'OLED screensaver', 'image retention'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/burn-in-prevention' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <BurnInPreventionClient />
}
