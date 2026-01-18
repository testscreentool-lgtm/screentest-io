import type { Metadata } from "next"
import PixelFixerClient from "./PixelFixerClient"

export const metadata: Metadata = {
  title: "Pixel Fixer Tool: Fix Stuck Pixels Online | Free Tool",
  description:
    "Free browser-based stuck pixel repair tool. Research shows 20-60% success rate. Try it before spending money on screen replacement.",
  alternates: {
    canonical: "https://screentest.io/pixel-fixer",
  },
  openGraph: {
    title: "Pixel Fixer Tool: Fix Stuck Pixels Online",
    description:
      "Free browser-based stuck pixel repair tool with 20-60% success rate.",
    url: "https://screentest.io/pixel-fixer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel Fixer Tool: Fix Stuck Pixels Online",
    description:
      "Free stuck pixel fixer tool. Try before replacing your screen.",
  },
}

export default function PixelFixerPage() {
  return <PixelFixerClient />
}
