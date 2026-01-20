// File: /app/page.tsx

import Link from "next/link"
import type { Metadata } from "next"

// ====== METADATA ======
export const metadata: Metadata = {
  title: "ScreenTest – Free Display Testing Tools",
  description:
    "Test monitors, phones and TVs with free professional display testing tools. Black screen, white screen, dead pixel and more. No download required.",
  alternates: {
    canonical: "https://screentest.io/",
  },
  openGraph: {
    title: "ScreenTest – Free Display Testing Tools",
    description:
      "Free professional tools to test monitors, phones and TVs for dead pixels, brightness and color issues.",
    url: "https://screentest.io/",
    siteName: "ScreenTest",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScreenTest – Free Display Testing Tools",
    description:
      "Free tools to test screens for dead pixels, brightness and display defects.",
  },
}

// ====== JSON-LD SCHEMA ======
function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://screentest.io/#organization",
        name: "ScreenTest",
        url: "https://screentest.io/",
        logo: "https://screentest.io/logo.png",
      },
      {
        "@type": "WebSite",
        "@id": "https://screentest.io/#website",
        url: "https://screentest.io/",
        name: "ScreenTest",
        publisher: {
          "@id": "https://screentest.io/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://screentest.io/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ====== PAGE ======
export default function HomePage() {
  const tools = [
    { name: "Black Screen Test", href: "/black-screen", description: "Find dead pixels and backlight bleeding.", icon: "⬛" },
    { name: "White Screen Test", href: "/white-screen", description: "Detect dark dead pixels and brightness issues.", icon: "⬜" },
    { name: "Dead Pixel Test", href: "/dead-pixel-test", description: "Comprehensive pixel defect testing.", icon: "🔍" },
    { name: "Pixel Fixer", href: "/pixel-fixer", description: "Attempt to fix stuck pixels.", icon: "🔧" },
    { name: "Brightness Test", href: "/brightness-test", description: "Check brightness uniformity.", icon: "☀️" },
    { name: "Contrast Test", href: "/contrast-test", description: "Test contrast ratio.", icon: "◐" },
    { name: "Refresh Rate Test", href: "/refresh-rate-test", description: "Measure refresh rate.", icon: "⚡" },
    { name: "Response Time Test", href: "/response-time-test", description: "Check ghosting and response time.", icon: "⏱️" },
    { name: "Screen Resolution", href: "/screen-resolution", description: "Detect resolution and PPI.", icon: "📐" },
  ]

  return (
    <div className="min-h-screen">
      
      {/* Inject Schema once */}
      <JsonLd />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Professional Display Testing Tools
        </h1>
        <p className="text-xl text-blue-100">
          Free tools to test monitors, phones and TVs for display defects.
        </p>
      </section>

      {/* Tools */}
      <section id="tools" className="py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="border rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition"
            >
              <div className="text-3xl mb-3">{tool.icon}</div>
              <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
              <p className="text-gray-600 text-sm">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
