import { Metadata } from 'next'
import WhiteScreenClient from './WhiteScreenClient'

export const metadata: Metadata = {
  title: 'White Screen Test: Detect Dark Dead Pixels in 30 Seconds | Free Tool',
  description: 'Professional white screen test reveals dark dead pixels and brightness uniformity issues in 30 seconds. Free instant testing for monitors, laptops, phones, TVs. Used by 10,000+ monthly.',
  keywords: ['white screen test', 'dark pixel test', 'brightness uniformity', 'display testing', 'monitor testing', 'screen tinting', 'white screen defects'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/white-screen' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'White Screen Test: Detect Dark Dead Pixels | ScreenTest',
    description: 'Free white screen test detects dark pixels and brightness uniformity issues in 30 seconds. Professional display testing.',
    type: 'website',
    url: 'https://screentest.io/white-screen',
  }
}

export default function Page() {
  return <WhiteScreenClient />
}
