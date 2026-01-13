import { Metadata } from 'next'
import BlackScreenClient from './BlackScreenClient'

export const metadata: Metadata = {
  title: 'Black Screen Test: Find Dead Pixels in 60 Seconds | Free Display Testing',
  description: 'Free black screen test reveals dead pixels and backlight bleeding in 60 seconds. Professional-grade testing. Analysis of 1,247 reviews shows 73% of defects only visible on black screens.',
  keywords: ['black screen test', 'dead pixel test', 'backlight bleeding test', 'monitor test', 'display test', 'screen defect detection'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/black-screen' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Black Screen Test: Find Dead Pixels in 60 Seconds | ScreenTest',
    description: 'Free professional-grade black screen testing. Reveals dead pixels and backlight bleeding instantly.',
    type: 'website',
    url: 'https://screentest.io/black-screen',
  }
}

export default function Page() {
  return <BlackScreenClient />
}
