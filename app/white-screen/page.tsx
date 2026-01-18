import type { Metadata } from "next"
import WhiteScreenClient from "./WhiteScreenClient"

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

export default function WhiteScreenPage() {
  return <WhiteScreenClient />
}
