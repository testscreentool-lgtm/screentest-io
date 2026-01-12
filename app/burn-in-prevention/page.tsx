import { Metadata } from 'next'
import BurnInPreventionClient from './BurnInPreventionClient'

export const metadata: Metadata = {
  title: 'Burn-in Prevention: Protect OLED Displays | Free Screensaver Tool',
  description: 'Prevent OLED burn-in with moving screensaver patterns. Protect OLED TV, phone, or monitor from permanent image retention caused by static content.',
  keywords: ['burn-in prevention', 'OLED burn-in', 'screen burn-in', 'image retention', 'OLED protection', 'burn-in screensaver'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/burn-in-prevention' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Burn-in Prevention: Protect OLED Displays | ScreenTest',
    description: 'Free OLED burn-in prevention with moving patterns. Extend OLED lifespan 3-5x.',
    type: 'website',
    url: 'https://screentest.io/burn-in-prevention',
  }
}

export default function Page() {
  return <BurnInPreventionClient />
}
