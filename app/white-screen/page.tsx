import { Metadata } from 'next'
import WhiteScreenClient from './WhiteScreenClient'

export const metadata: Metadata = {
  title: 'White Screen Test: Detect Dark Dead Pixels in 30 Seconds | Free Tool',
  description: 'Professional white screen test reveals dark dead pixels and brightness uniformity issues in 30 seconds. Free instant testing for monitors, laptops, phones, TVs. Used by 10,000+ monthly.',
  keywords: ['white screen test', 'dark pixel test', 'brightness test', 'monitor uniformity', 'display testing'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/white-screen' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <WhiteScreenClient />
}
