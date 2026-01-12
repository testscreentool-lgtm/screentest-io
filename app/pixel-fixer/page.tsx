import { Metadata } from 'next'
import PixelFixerClient from './PixelFixerClient'

export const metadata: Metadata = {
  title: 'Pixel Fixer: Fix Stuck Pixels Free | 20-60% Success Rate',
  description: 'Free pixel fixer attempts to repair stuck pixels using rapid color flashing. Works on stuck pixels (colored dots) with 20-60% success rate. Safe for all displays.',
  keywords: ['pixel fixer', 'fix stuck pixels', 'repair dead pixels', 'jscreenfix alternative', 'stuck pixel repair', 'pixel repair tool'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/pixel-fixer' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Pixel Fixer: Fix Stuck Pixels Free | ScreenTest',
    description: 'Free pixel fixer repairs stuck pixels with 20-60% success rate. Safe method, unlimited attempts.',
    type: 'website',
    url: 'https://screentest.io/pixel-fixer',
  }
}

export default function Page() {
  return <PixelFixerClient />
}
