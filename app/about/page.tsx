import Link from 'next/link'
export const metadata = {
  title: "About ScreenTest.io – Free Monitor & Display Testing Tools",
  description: "Learn about ScreenTest.io. Free professional-grade monitor and display testing tools for gamers, designers, and everyday users.",
  alternates: {
    canonical: "https://screentest.io/about",
  },
};
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">About ScreenTest.io</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-xl text-gray-600 leading-relaxed">
            ScreenTest.io provides free, professional-grade display testing tools for everyone. 
            Whether you're a designer, gamer, tech professional, or just want to ensure your monitor 
            is working perfectly, our comprehensive suite of tools helps you test and optimize your display.
          </p>

          <div className="bg-white rounded-xl p-8 shadow-sm my-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Make professional display testing accessible to everyone, completely free, with no downloads 
              or signups required. We believe everyone deserves tools to verify their display quality and 
              detect issues early.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm my-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>12 Professional Tools:</strong> From dead pixel detection to burn-in prevention</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>100% Free:</strong> No hidden costs, no premium tiers, no subscriptions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>No Download Required:</strong> Works instantly in your browser</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>All Devices:</strong> Desktop, laptop, tablet, and mobile support</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Privacy First:</strong> No tracking, no data collection, no accounts</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 my-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Get in Touch</h2>
            <p className="text-blue-800 mb-4">
              Have feedback, questions, or suggestions? We'd love to hear from you!
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
