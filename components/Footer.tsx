import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center space-x-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-3 grid-rows-3 gap-[2px]">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-[4px] h-[4px] rounded-[1px] ${
                        i === 4 ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-xl font-bold">ScreenTest</span>
            </div>
            <p className="text-sm text-gray-300 font-medium">Professional Display Testing Tools</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link href="/about" className="font-semibold hover:text-blue-400 transition">
              About
            </Link>
            <Link href="/privacy" className="font-semibold hover:text-blue-400 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-semibold hover:text-blue-400 transition">
              Terms of Service
            </Link>
            <Link href="/contact" className="font-semibold hover:text-blue-400 transition">
              Contact
            </Link>
          </nav>
        </div>

        {/* Copyright - Bold and Prominent */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-base font-bold text-gray-100">
            © {new Date().getFullYear()} ScreenTest - All Rights Reserved
          </p>
          <p className="text-sm text-gray-300 mt-2 font-medium">
            Free Professional Display Testing Tools
          </p>
        </div>
      </div>
    </footer>
  )
}
