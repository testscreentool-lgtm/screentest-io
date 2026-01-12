import { Metadata } from 'next'
import DeadPixelTestClient from './DeadPixelTestClient'

export const metadata: Metadata = {
  title: 'Dead Pixel Test: Find All Pixel Defects in 2 Minutes | 6-Color Test',
  description: 'Comprehensive 6-color dead pixel test detects 90%+ of defects in 2-3 minutes. Industry standard test used by manufacturers. Free instant testing for all devices.',
  keywords: [
    'dead pixel test',
    'stuck pixel test',
    'monitor pixel test',
    'screen defect test',
    'multi-color pixel test',
    'display quality test',
    'pixel checker',
    'comprehensive display test'
  ],
  authors: [{ name: 'ScreenTest' }],
  alternates: {
    canonical: 'https://screentest.io/dead-pixel-test'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function DeadPixelTestPage() {
  return <DeadPixelTestClient />
}
