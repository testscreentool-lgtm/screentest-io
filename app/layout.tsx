import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ScreenTest - Professional Display Testing Tools',
  description: 'Free online tools to test dead pixels, calibrate monitors, and optimize your display quality. No download required. Works on all devices.',
  keywords: 'screen test, dead pixel test, monitor test, black screen, white screen, display test, pixel test, screen calibration',
  authors: [{ name: 'ScreenTest' }],
  openGraph: {
    title: 'ScreenTest - Professional Display Testing Tools',
    description: 'Free online tools to test dead pixels, calibrate monitors, and optimize your display quality.',
    url: 'https://screentest.io',
    siteName: 'ScreenTest',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScreenTest - Professional Display Testing Tools',
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={poppins.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
