import type { Metadata } from "next"
import ContrastTestClient from "./ContrastTestClient"

export const metadata: Metadata = {
  title: "Contrast Test: Monitor Contrast Ratio & Gamma Testing | ScreenTest",
  description:
    "Free monitor contrast test. Compare IPS vs VA vs OLED contrast ratios, verify gamma calibration and black levels. Professional contrast testing patterns.",
  alternates: {
    canonical: "https://screentest.io/contrast-test",
  },
  openGraph: {
    title: "Contrast Test: Monitor Contrast Ratio & Gamma Testing",
    description:
      "Test monitor contrast ratios, gamma calibration and black levels. Compare IPS, VA and OLED panels.",
    url: "https://screentest.io/contrast-test",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contrast Test: Monitor Contrast Ratio & Gamma Testing",
    description:
      "Free contrast test to check black levels, gamma and panel contrast performance.",
  },
}

export default function ContrastTestPage() {
  return <ContrastTestClient />
}
