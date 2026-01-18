import type { Metadata } from "next"
import DeadPixelTestClient from "./DeadPixelTestClient"

export const metadata: Metadata = {
  title: "Dead Pixel Test – Free Online Screen Checker | ScreenTest",
  description:
    "Run a free dead pixel test online. Detect dead or stuck pixels on monitors, phones, laptops, and TVs in 2 minutes. No download.",
  alternates: {
    canonical: "https://screentest.io/dead-pixel-test",
  },
  openGraph: {
    title: "Dead Pixel Test – Free Online Screen Checker | ScreenTest",
    description:
      "Run a free dead pixel test online. Detect dead or stuck pixels on any screen in 2 minutes.",
    url: "https://screentest.io/dead-pixel-test",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dead Pixel Test – Free Online Screen Checker | ScreenTest",
    description:
      "Run a free dead pixel test online. Detect dead or stuck pixels on any screen in 2 minutes.",
  },
}

export default function DeadPixelTestPage() {
  return <DeadPixelTestClient />
}
