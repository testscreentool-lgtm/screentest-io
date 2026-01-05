import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://screentest.io'),
  title: {
    default: 'ScreenTest.io - Professional Display Testing Tools | Free Online',
    template: '%s | ScreenTest.io',
  },
  description: 'Free online tools to test dead pixels, calibrate monitors, and optimize display quality. Black screen, white screen, dead pixel test, and 9 more professional testing tools. No download required.',
  keywords: ['screen test', 'dead pixel test', 'monitor test', 'display testing', 'black screen', 'white screen', 'pixel fixer', 'monitor calibration', 'refresh rate test', 'response time test'],
  authors: [{ name: 'ScreenTest.io' }],
  creator: 'ScreenTest.io',
  publisher: 'ScreenTest.io',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://screentest.io',
    title: 'ScreenTest.io - Professional Display Testing Tools',
    description: 'Free online tools to test dead pixels, calibrate monitors, and optimize display quality. 12 professional testing tools available instantly.',
    siteName: 'ScreenTest.io',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ScreenTest.io - Display Testing Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScreenTest.io - Display Testing Tools',
    description: 'Free online tools for professional display testing. Test dead pixels, calibrate monitors, and optimize screen quality.',
    images: ['/og-image.png'],
    creator: '@screentest',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '<meta name="google-site-verification" content="NVLBiVsRjspMpvEPLdNlULVN_Ff-cn9vjvp8BlQLV0g" />',
    // yandex: 'YOUR_YANDEX_CODE',
    // bing: 'YOUR_BING_CODE',
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
        {/* Google Analytics - Add your GA4 tracking code */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script> */}
        {/* <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `
        }} /> */}
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
