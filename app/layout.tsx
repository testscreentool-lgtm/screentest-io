import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ScreenTest.io - Professional Display Testing Tools',
  description: 'Free online tools to test dead pixels, calibrate monitors, and optimize your display quality. No download required. Works on all devices.',
  keywords: 'screen test, dead pixel test, monitor test, black screen, white screen, display test, pixel test, screen calibration',
  authors: [{ name: 'ScreenTest.io' }],
  openGraph: {
    title: 'ScreenTest.io - Professional Display Testing Tools',
    description: 'Free online tools to test dead pixels, calibrate monitors, and optimize your display quality.',
    url: 'https://screentest.io',
    siteName: 'ScreenTest.io',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScreenTest.io - Professional Display Testing Tools',
    description: 'Free online tools to test dead pixels, calibrate monitors, and optimize your display quality.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
