import { Metadata } from 'next'
import ScreenResolutionClient from './ScreenResolutionClient'

export const metadata: Metadata = {
  title: 'Screen Resolution Test: Detect Display Resolution & DPI | Free Tool',
  description: 'Detect your screen resolution, pixel density, and aspect ratio. Verify 1080p, 1440p, 4K, 8K claims instantly.',
  keywords: ['screen resolution', 'display resolution', 'pixel density', 'DPI test', '4K test', 'resolution checker'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/screen-resolution' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <ScreenResolutionClient />
}
