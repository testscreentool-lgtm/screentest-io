import { Metadata } from 'next'
import BlackScreenClient from './BlackScreenClient'

export const metadata: Metadata = {
  title: 'Black Screen Test: Find Dead Pixels in 60 Seconds | Free',
  description:
    'Free black screen test reveals dead pixels and backlight bleeding hidden during normal use. Professional testing used by 10K+ users. Works instantly on all devices.',
  keywords: [
    'black screen test',
    'black screen oled test',
    'true black screen',
    'screen black test',
    'backlight bleeding test',
    'display black screen',
    'monitor black screen test',
    'oled burn in test',
  ],
  authors: [{ name: 'ScreenTest Team' }],
  creator: 'ScreenTest',
  publisher: 'ScreenTest',
  alternates: { 
    canonical: 'https://screentest.io/black-screen' 
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
  openGraph: {
    title: 'Black Screen Test: Find Dead Pixels in 60 Seconds',
    description:
      'Free professional black screen testing reveals display defects invisible during normal use. Detects dead pixels, backlight bleeding, and uniformity issues instantly.',
    type: 'website',
    url: 'https://screentest.io/black-screen',
    siteName: 'ScreenTest',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Screen Test: Find Dead Pixels in 60 Seconds',
    description:
      'Free professional black screen testing. Reveals dead pixels and backlight bleeding invisible during normal use.',
  },
}

export default function Page() {
  return <BlackScreenClient />
}
