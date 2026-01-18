import { Metadata } from 'next'
import BlackScreenClient from './BlackScreenClient'

export const metadata: Metadata = {
  title: 'Black Screen Test – Find Dead Pixels in 60 Seconds',
  description:
    'Free black screen test reveals dead pixels and backlight bleeding instantly. Professional-grade testing used by 10K+ users. 73% of defects only visible on black.',
  keywords: [
    'black screen test',
    'black screen oled test',
    'true black screen',
    'dead pixel test',
    'backlight bleeding test',
    'monitor test',
    'display test',
    'screen defect detection',
  ],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/black-screen' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Black Screen Test: Find Dead Pixels in 60 Seconds | ScreenTest',
    description:
      'Free professional-grade black screen testing. Reveals dead pixels and backlight bleeding instantly.',
    type: 'website',
    url: 'https://screentest.io/black-screen',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Screen Test: Find Dead Pixels in 60 Seconds | ScreenTest',
    description:
      'Free professional-grade black screen testing. Reveals dead pixels and backlight bleeding instantly.',
  },
}

export default function Page() {
  return <BlackScreenClient />
}
