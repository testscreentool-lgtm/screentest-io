import type { Metadata } from "next"
import WhiteScreenClient from "./WhiteScreenClient"
import Script from 'next/script'

export const metadata: Metadata = {
  title: "White Screen Test: Detect Dark Dead Pixels in 30 Seconds | Free Tool",
  description:
    "Professional white screen test reveals dark dead pixels and brightness uniformity issues in 30 seconds. Free instant testing for monitors, laptops, phones, TVs.",
  alternates: {
    canonical: "https://screentest.io/white-screen",
  },
  openGraph: {
    title: "White Screen Test: Detect Dark Dead Pixels | ScreenTest",
    description:
      "Free white screen test detects dark pixels and brightness uniformity issues in 30 seconds.",
    url: "https://screentest.io/white-screen",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "White Screen Test: Detect Dark Dead Pixels | ScreenTest",
    description:
      "Free white screen test detects dark pixels and brightness uniformity issues in 30 seconds.",
  },
}



// P2 FIX: JSON-LD moved from client component to server-side rendering
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long should I run a white screen test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For dark pixel detection, run the test for 30-60 seconds examining each screen quadrant. For thorough brightness uniformity checks, test for 2-3 minutes. Professional displays should show 95%+ brightness uniformity with no visible dark spots or discolored patches."
        }
      },
      {
        "@type": "Question",
        "name": "What should I look for on a white screen test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for dark dead pixels (black dots), yellow or pink tinting, brightness variations across the panel, and dirty screen effect (clouding visible on white backgrounds). These defects appear in 25% of displays and are only visible against pure white."
        }
      },
      {
        "@type": "Question",
        "name": "Why do I see dark spots on a white screen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dark spots indicate dead pixels (black dots requiring replacement), dust particles between panel layers, or pressure damage creating permanent dark areas. Dark dead pixels affect 8-12% of displays under $300."
        }
      }
    ]
  }

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "White Screen Test: Detect Dark Dead Pixels in 30 Seconds",
    "description": "Professional white screen test reveals dark dead pixels and brightness uniformity issues. Free instant testing for monitors, laptops, phones, TVs.",
    "author": {
      "@type": "Organization",
      "name": "ScreenTest"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ScreenTest",
      "logo": {
        "@type": "ImageObject",
        "url": "https://screentest.io/logo.png"
      }
    },
    "datePublished": "2026-01-12",
    "dateModified": "2026-01-12"
  }

export default function WhiteScreenPage() {
  return (
    <>
      <Script
        id="white-screen-schema-0"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="white-screen-schema-1"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <WhiteScreenClient />
    </>
  )
}
