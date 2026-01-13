import { Metadata } from 'next'
import ContrastTestClient from './ContrastTestClient'

export const metadata: Metadata = {
  title: 'Contrast Test: Monitor Contrast Ratio & Gamma Testing 2025 | ScreenTest',
  description: 'Free monitor contrast test. Compare IPS vs VA vs OLED contrast (1000:1, 3000:1, infinite). Verify gamma 2.2/2.4 calibration and black levels.',
  keywords: 'contrast test, monitor contrast ratio, IPS vs VA vs OLED, gamma 2.2 2.4, black level test, native contrast, dynamic contrast, contrast ratio test',
  openGraph: {
    title: 'Contrast Test: Monitor Contrast Ratio & Gamma Testing',
    description: 'Test native contrast ratio, verify gamma calibration, compare panel technologies. Understand IPS 1000:1 vs VA 3000:1 vs OLED infinite contrast.',
    type: 'website',
    url: 'https://screentest.io/contrast-test',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contrast Test: Monitor Contrast Ratio & Gamma Testing',
    description: 'Test contrast ratio, verify gamma curves, compare IPS/VA/OLED black levels. Professional testing patterns.',
  },
  alternates: {
    canonical: 'https://screentest.io/contrast-test',
  },
}

export default function ContrastTestPage() {
  return <ContrastTestClient />
}
