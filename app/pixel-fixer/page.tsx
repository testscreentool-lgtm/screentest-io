import { Metadata } from 'next'
import PixelFixerClient from './PixelFixerClient'

export const metadata: Metadata = {
  title: 'Pixel Fixer: Fix Stuck Pixels Free | 20-60% Success Rate',
  description: 'Free pixel fixer attempts to repair stuck pixels using rapid color flashing. 20-60% success rate. Safe for all displays. Alternative to $100-300 screen replacement.',
  keywords: ['pixel fixer', 'fix stuck pixels', 'repair dead pixels', 'jscreenfix alternative', 'stuck pixel repair'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/pixel-fixer' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <PixelFixerClient />
}
