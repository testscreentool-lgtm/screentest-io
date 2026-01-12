import { Metadata } from 'next'
import BrightnessTestClient from './BrightnessTestClient'

export const metadata: Metadata = {
  title: 'Brightness Test: Calibrate Screen Brightness & Uniformity | Free Tool',
  description: 'Test brightness uniformity and calibrate display levels. Detect backlight variations and optimize brightness for eye comfort. Professional calibration tool.',
  keywords: ['brightness test', 'screen calibration', 'brightness uniformity', 'backlight test', 'display brightness'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/brightness-test' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <BrightnessTestClient />
}
