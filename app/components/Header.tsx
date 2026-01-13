import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo size="md" />

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/dead-pixel-test" 
              className="font-poppins font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Dead Pixel Test
            </Link>
            <Link 
              href="/color-test" 
              className="font-poppins font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Color Test
            </Link>
            <Link 
              href="/brightness-test" 
              className="font-poppins font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Brightness Test
            </Link>
            <Link 
              href="/guides" 
              className="font-poppins font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Guides
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link 
              href="/dead-pixel-test"
              className="font-poppins font-semibold bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Start Test
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
