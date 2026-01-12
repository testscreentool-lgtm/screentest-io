import { Metadata } from 'next'
import ContrastTestClient from './ContrastTestClient'

export const metadata: Metadata = {
  title: 'Contrast Test: Test Contrast Ratio & Grayscale Accuracy | Free Tool',
  description: 'Test display contrast ratio and grayscale accuracy. Optimize contrast settings for HDR content and professional color grading work.',
  keywords: ['contrast test', 'contrast ratio', 'grayscale test', 'HDR calibration', 'display contrast'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/contrast-test' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <ContrastTestClient />
}
