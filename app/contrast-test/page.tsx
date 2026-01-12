import { Metadata } from 'next'
import ContrastTestClient from './ContrastTestClient'

export const metadata: Metadata = {
  title: 'Contrast Test: Check Contrast Ratio & Grayscale Accuracy | Free Tool',
  description: 'Test display contrast ratio and grayscale accuracy with 16-level gradient testing. Verify monitor can distinguish all gray levels from black to white.',
  keywords: ['contrast test', 'contrast ratio', 'grayscale test', 'black level test', 'display contrast', 'monitor contrast'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/contrast-test' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Contrast Test: Check Contrast Ratio | ScreenTest',
    description: 'Free contrast test with 16-level grayscale gradients. Professional display testing.',
    type: 'website',
    url: 'https://screentest.io/contrast-test',
  }
}

export default function Page() {
  return <ContrastTestClient />
}
