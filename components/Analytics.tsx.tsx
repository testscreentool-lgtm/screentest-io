'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-9WVWNB3SQP'

// Page view tracking
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Event tracking
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Analytics component to track page views
export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      pageview(pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''))
    }
  }, [pathname, searchParams])

  return null
}
