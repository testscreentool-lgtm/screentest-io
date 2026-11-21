import { Metadata } from 'next'
import BurnInPreventionClient from './BurnInPreventionClient'
import Script from 'next/script'

// P3 FIX: Added twitter metadata (was missing)
export const metadata: Metadata = {
  title: 'Burn-in Prevention: Protect OLED Displays | Free Screensaver Tool',
  description: 'Prevent OLED burn-in with moving screensaver patterns. Protect OLED TV, phone, or monitor from permanent image retention caused by static content.',
  keywords: ['burn-in prevention', 'OLED burn-in', 'screen burn-in', 'image retention', 'OLED protection', 'burn-in screensaver'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/burn-in-prevention' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Burn-in Prevention: Protect OLED Displays | ScreenTest',
    description: 'Free OLED burn-in prevention with moving patterns. Extend OLED lifespan 3-5x.',
    type: 'website',
    url: 'https://screentest.io/burn-in-prevention',
    siteName: 'ScreenTest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Burn-in Prevention: Protect OLED Displays',
    description: 'Free OLED burn-in prevention tool. Moving screensaver patterns protect your OLED TV, phone, or monitor.',
  },
}



// P2 FIX: JSON-LD moved from client component to server-side rendering
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What causes OLED burn-in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OLED burn-in occurs when static images display for extended periods (2000+ hours), causing uneven pixel wear. Bright UI elements like taskbars, logos, or HUDs degrade faster than surrounding pixels. Risk increases with screen brightness above 80% and static content over 4 hours daily."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take for OLED burn-in to occur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OLED burn-in typically requires 2000-5000 hours of displaying static content at high brightness (80%+). With normal varied usage, modern OLEDs last 5-10 years without noticeable burn-in. Displaying static taskbars 8 hours daily may show burn-in within 12-24 months."
        }
      },
      {
        "@type": "Question",
        "name": "Can OLED burn-in be prevented?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Keep brightness at 60% or lower for static content, enable pixel shift features, hide taskbars when not needed, use dark mode, run screensavers after 5-10 minutes idle, vary displayed content frequently. These methods extend OLED lifespan by 3-5x."
        }
      }
    ]
  }

export default function Page() {
  return (
    <>
      <Script
        id="burn-in-prevention-schema-0"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BurnInPreventionClient />
    </>
  )
}
