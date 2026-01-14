// File: /components/Analytics.tsx
// Analytics tracking component

'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track page views
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    
    // Google Analytics (if you have GA_MEASUREMENT_ID)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_path: url,
      })
    }

    // You can add other analytics here (Plausible, Umami, etc.)
    
  }, [pathname, searchParams])

  return null
}
