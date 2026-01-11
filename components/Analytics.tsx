'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag: any
  }
}

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-9WVWNB3SQP', {
        page_path: pathname + (searchParams ? searchParams.toString() : ''),
      })
    }
  }, [pathname, searchParams])

  return null
}
