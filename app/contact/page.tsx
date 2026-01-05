export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <p className="text-lg text-gray-600 mb-8">
            We'd love to hear from you! Whether you have questions, feedback, bug reports, 
            or feature suggestions, feel free to reach out.
          </p>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-blue-900 mb-2">📧 Email</h2>
              <a 
                href="mailto:contact@screentest.io" 
                className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
              >
                contact@screentest.io
              </a>
              <p className="text-sm text-blue-700 mt-2">
                We typically respond within 24-48 hours
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-green-900 mb-2">💬 Feedback</h2>
              <p className="text-green-800">
                Found a bug? Have a feature request? Send us your thoughts at{' '}
                <a href="mailto:feedback@screentest.io" className="font-semibold hover:underline">
                  feedback@screentest.io
                </a>
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-purple-900 mb-2">🤝 Partnerships</h2>
              <p className="text-purple-800">
                Interested in partnering or collaboration? Reach out to{' '}
                <a href="mailto:partnerships@screentest.io" className="font-semibold hover:underline">
                  partnerships@screentest.io
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">How long until I get a response?</h3>
              <p className="text-gray-600 text-sm">
                We aim to respond to all emails within 24-48 hours during business days.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Do you offer technical support?</h3>
              <p className="text-gray-600 text-sm">
                Yes! If you're experiencing issues with our tools, email us with details about 
                your device, browser, and the problem you're facing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Can I suggest new features?</h3>
              <p className="text-gray-600 text-sm">
                Absolutely! We're always looking to improve. Send your ideas to feedback@screentest.io
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
