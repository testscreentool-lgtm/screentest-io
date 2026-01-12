import { Metadata } from 'next'
import BrightnessTestClient from './BrightnessTestClient'

export const metadata: Metadata = {
  title: 'Brightness Test: Calibrate Screen Brightness & Uniformity | Free Tool',
  description: 'Test brightness uniformity and calibrate display levels for optimal viewing. Detect backlight variations and reduce eye strain with proper brightness settings.',
  keywords: ['brightness test', 'screen calibration', 'brightness uniformity', 'monitor brightness', 'display calibration', 'eye strain reduction'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/brightness-test' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Brightness Test: Calibrate Screen Brightness | ScreenTest',
    description: 'Free brightness test for optimal viewing and eye comfort. Professional calibration tool.',
    type: 'website',
    url: 'https://screentest.io/brightness-test',
  }
}

export default function Page() {
  return <BrightnessTestClient />
}
