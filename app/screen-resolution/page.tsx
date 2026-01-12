import { Metadata } from 'next'
import ScreenResolutionClient from './ScreenResolutionClient'

export const metadata: Metadata = {
  title: 'Screen Resolution Test: Check Resolution & Pixel Density | Free Tool',
  description: 'Detect screen actual resolution and pixel density (PPI/DPI). Verify 1080p, 1440p, 4K, or Retina displays configured correctly.',
  keywords: ['screen resolution test', 'resolution checker', 'pixel density', 'PPI calculator', 'DPI test'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/screen-resolution' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <ScreenResolutionClient />
}
