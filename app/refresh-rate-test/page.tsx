import { Metadata } from 'next'
import RefreshRateTestClient from './RefreshRateTestClient'

export const metadata: Metadata = {
  title: 'Refresh Rate Test: Verify 144Hz/240Hz Monitor Hz Instantly 2025 | ScreenTest',
  description: 'Free instant refresh rate test. Verify if your 144Hz/240Hz monitor is stuck at 60Hz. Real-time Hz detection with troubleshooting. Fix "stuck at 60Hz" issues.',
  keywords: 'refresh rate test, 144hz test, 240hz test, monitor hz test, stuck at 60hz fix, display refresh rate, FPS test, gaming monitor test, verify 144hz, DisplayPort vs HDMI',
  openGraph: {
    title: 'Refresh Rate Test: Verify 144Hz/240Hz Monitor Hz Instantly',
    description: 'Instant Hz detection. Find out if your gaming monitor is stuck at 60Hz. Real-time testing with troubleshooting for 144Hz/240Hz displays.',
    type: 'website',
    url: 'https://screentest.io/refresh-rate-test',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refresh Rate Test: Verify 144Hz/240Hz Monitor Hz',
    description: 'Test your monitor\'s actual refresh rate. Detect if stuck at 60Hz instead of 144Hz/240Hz.',
  },
  alternates: {
    canonical: 'https://screentest.io/refresh-rate-test',
  },
}

export default function RefreshRateTestPage() {
  return <RefreshRateTestClient />
}
