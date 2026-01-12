// File: /app/layout.tsx
// Root layout with navigation menu

import type { Metadata } from 'next'
import './globals.css'
import ToolsMenu from '@/components/ToolsMenu'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  title: {
    default: 'ScreenTest - Free Professional Display Testing Tools',
    template: '%s | ScreenTest'
  },
  description: 'Professional display testing suite with 11 free tools. Test for dead pixels, backlight bleeding, color accuracy, and more. Used by 10,000+ monthly.',
  keywords: ['screen test', 'dead pixel test', 'monitor test', 'display test', 'pixel checker'],
  authors: [{ name: 'ScreenTest' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://screentest.io',
    siteName: 'ScreenTest',
    title: 'ScreenTest - Free Professional Display Testing Tools',
    description: 'Professional display testing suite with 11 free tools. Test for dead pixels, backlight bleeding, and more.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <ToolsMenu />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
