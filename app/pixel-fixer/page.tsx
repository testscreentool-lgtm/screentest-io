import type { Metadata } from 'next'
import PixelFixerClient from './PixelFixerClient'

export const metadata: Metadata = {
  title: 'Pixel Fixer – Free Online Stuck Pixel Repair Tool',
  description:
    'Use this free pixel fixer tool to identify and refresh stuck pixels on LCD, LED, and OLED displays.',
  keywords: [
    'pixel fixer',
    'stuck pixel test',
    'dead pixel checker',
    'screen pixel repair'
  ],
  alternates: {
    canonical: 'https://screentest.io/pixel-fixer'
  },
  openGraph: {
    title: 'Pixel Fixer Tool',
    description: 'Detect and refresh stuck pixels using a fullscreen pixel fixer tool.',
    type: 'website'
  }
}

export default function Page() {
  return <PixelFixerClient />
}
