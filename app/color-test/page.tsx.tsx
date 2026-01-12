import { Metadata } from 'next'
import ColorTestClient from './ColorTestClient'

export const metadata: Metadata = {
  title: 'Color Test: RGB Color Accuracy Testing | Free Display Calibration',
  description: 'Test RGB color accuracy with 9 key colors. Professional display calibration for photographers, designers, and video editors. Free instant testing.',
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/color-test' },
  robots: { index: true, follow: true },
}

export default function ColorTestPage() {
  return <ColorTestClient />
}
