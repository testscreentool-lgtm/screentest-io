import { Metadata } from 'next'
import PixelFixerClient from './PixelFixerClient'

export const metadata: Metadata = {
  title: 'Pixel Fixer: Fix Stuck Pixels Free | 20-60% Success Rate | ScreenTest',
  description: 'Free browser-based pixel fixer tool. Research shows 20-60% success rate for stuck pixels. Works on LCD, OLED, and all screens. No download required - start fixing now.',
  keywords: 'pixel fixer, stuck pixel fix, dead pixel repair, screen pixel fixer, fix stuck pixel, jscreenfix alternative, pixel repair tool, stuck pixel software',
  openGraph: {
    title: 'Pixel Fixer: Fix Stuck Pixels Free | 20-60% Success Rate',
    description: 'Free browser-based tool to fix stuck pixels. 20-60% success rate. Save $200-$650 on screen replacement. Works on all devices.',
    type: 'website',
    url: 'https://screentest.io/pixel-fixer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel Fixer: Fix Stuck Pixels Free | 20-60% Success Rate',
    description: 'Free browser-based tool to fix stuck pixels. 20-60% success rate. Save $200-$650 on screen replacement.',
  },
  alternates: {
    canonical: 'https://screentest.io/pixel-fixer',
  },
}

export default function PixelFixerPage() {
  return <PixelFixerClient />
}
