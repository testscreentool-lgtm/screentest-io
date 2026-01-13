import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizes = {
    sm: { icon: 24, text: 'text-lg' },
    md: { icon: 32, text: 'text-2xl' },
    lg: { icon: 40, text: 'text-3xl' }
  }
  
  const iconSize = sizes[size].icon
  const textSize = sizes[size].text

  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Monitor Icon */}
      <div className="relative flex-shrink-0">
        <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className="transition-all" style={{ stopColor: '#4F46E5' }} />
              <stop offset="100%" className="transition-all" style={{ stopColor: '#7C3AED' }} />
            </linearGradient>
          </defs>
          
          {/* Monitor screen with gradient */}
          <rect x="4" y="8" width="32" height="22" rx="2" fill="url(#iconGrad)" className="group-hover:opacity-90 transition-opacity"/>
          
          {/* Screen inner glow */}
          <rect x="7" y="11" width="26" height="16" rx="1" fill="white" opacity="0.15"/>
          
          {/* Pixel grid - represents testing */}
          <circle cx="13" cy="16" r="1.5" fill="white" opacity="0.9"/>
          <circle cx="20" cy="16" r="1.5" fill="white" opacity="0.9"/>
          <circle cx="27" cy="16" r="1.5" fill="white" opacity="0.9"/>
          <circle cx="13" cy="22" r="1.5" fill="white" opacity="0.9"/>
          
          {/* Highlighted pixel (represents found defect) */}
          <circle cx="20" cy="22" r="1.5" fill="#F59E0B" className="animate-pulse"/>
          
          <circle cx="27" cy="22" r="1.5" fill="white" opacity="0.9"/>
          
          {/* Monitor stand */}
          <path d="M 17 30 L 23 30 L 22 34 L 18 34 Z" fill="url(#iconGrad)"/>
          <rect x="15" y="34" width="10" height="2" rx="1" fill="url(#iconGrad)"/>
        </svg>
      </div>

      {/* Text Logo */}
      <div className={`flex items-baseline ${textSize}`}>
        <span className="font-poppins font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
          Screen
        </span>
        <span className="font-poppins font-semibold text-indigo-600 group-hover:text-indigo-700 transition-colors">
          Test
        </span>
        <span className="font-inter font-normal text-gray-500 text-base group-hover:text-gray-600 transition-colors">
          .io
        </span>
      </div>
    </Link>
  )
}
