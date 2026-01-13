import { Metadata } from 'next'
import BrightnessTestClient from './BrightnessTestClient'

export const metadata: Metadata = {
  title: 'Brightness Test: Monitor Nit Measurement & HDR Guide 2025 | ScreenTest',
  description: 'Free monitor brightness test. Understand nit levels, HDR certifications (400/600/1000), uniformity testing. Optimize brightness for gaming and work.',
  keywords: 'brightness test, monitor nits, HDR test, DisplayHDR 400 600 1000, brightness uniformity, nit measurement, HDR gaming, eye strain, monitor calibration',
  openGraph: {
    title: 'Brightness Test: Monitor Nit Measurement & HDR Guide',
    description: 'Test monitor brightness levels, check uniformity, understand HDR certifications. Learn optimal nit levels for gaming and office work.',
    type: 'website',
    url: 'https://screentest.io/brightness-test',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brightness Test: Monitor Nit Measurement & HDR Guide',
    description: 'Test brightness levels, HDR capabilities, and uniformity. Understand DisplayHDR 400/600/1000 certifications.',
  },
  alternates: {
    canonical: 'https://screentest.io/brightness-test',
  },
}

export default function BrightnessTestPage() {
  return <BrightnessTestClient />
}
