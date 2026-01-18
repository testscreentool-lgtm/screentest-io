import type { Metadata } from "next"
import PixelFixerClient from "../pixel-fixer/PixelFixerClient"

export const metadata: Metadata = {
  title: "Stuck Pixel Test: Check for Stuck Pixels Online | Free Tool",
  description:
    "Free stuck pixel test for all screens. Detect red, green, blue, or white stuck pixels in 2 minutes. Essential for new monitors, warranty checks, and used device inspections.",
  alternates: {
    canonical: "https://screentest.io/stuck-pixel-test",
  },
  openGraph: {
    title: "Stuck Pixel Test: Check for Stuck Pixels Online",
    description:
      "Free 2-minute stuck pixel test. Detect red, green, blue, and white stuck pixels on any screen. No download required.",
    url: "https://screentest.io/stuck-pixel-test",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stuck Pixel Test: Check for Stuck Pixels Online",
    description:
      "Free stuck pixel test. Detect stuck pixels on monitors, phones, and TVs in minutes.",
  },
}

export default function StuckPixelTestPage() {
  return <PixelFixerClient />
}
