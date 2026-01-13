import { Metadata } from 'next'
import MonitorTestClient from './MonitorTestClient'

export const metadata: Metadata = {
  title: 'Monitor Test: Free Comprehensive Display Testing Suite 2025 | ScreenTest',
  description: 'Free professional monitor test - dead pixels, color accuracy, backlight bleed, text sharpness, uniformity. 8 comprehensive tests in 5-10 minutes. Works on all displays.',
  keywords: 'monitor test, screen test, display test, monitor calibration, dead pixel test, color accuracy, backlight bleed, refresh rate test, gaming monitor test, response time',
  openGraph: {
    title: 'Monitor Test: Free Comprehensive Display Testing Suite 2025',
    description: 'Professional 8-test suite: dead pixels, color accuracy, backlight bleed, uniformity. Test in 5-10 minutes before return window closes.',
    type: 'website',
    url: 'https://screentest.io/monitor-test',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monitor Test: Free Comprehensive Display Testing Suite 2025',
    description: 'Professional monitor testing: dead pixels, backlight bleed, color accuracy. 8 tests in 5-10 minutes.',
  },
  alternates: {
    canonical: 'https://screentest.io/monitor-test',
  },
}

export default function MonitorTestPage() {
  return <MonitorTestClient />
}
