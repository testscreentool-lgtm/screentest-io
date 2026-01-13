import { Metadata } from 'next'
import DeadPixelTestClient from './DeadPixelTestClient'

export const metadata: Metadata = {
  title: 'Dead Pixel Test: Free Instant Detection | ISO 13406-2 Compliant | ScreenTest',
  description: 'Free dead pixel test for all screens. Detect defects in 2 minutes. Essential for new purchases, warranty claims, and used device inspections. ISO 13406-2 compliant testing.',
  keywords: 'dead pixel test, stuck pixel test, pixel test, monitor test, screen test, dead pixel checker, LCD test, ISO 13406-2, pixel defect test',
  openGraph: {
    title: 'Dead Pixel Test: Free Instant Detection | ISO 13406-2 Compliant',
    description: 'Free 2-minute dead pixel test. Essential for new purchases and warranty claims. Test before your 14-30 day return window closes.',
    type: 'website',
    url: 'https://screentest.io/dead-pixel-test',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dead Pixel Test: Free Instant Detection | ISO 13406-2 Compliant',
    description: 'Free 2-minute dead pixel test. Essential for new purchases and warranty claims.',
  },
  alternates: {
    canonical: 'https://screentest.io/dead-pixel-test',
  },
}

export default function DeadPixelTestPage() {
  return <DeadPixelTestClient />
}
