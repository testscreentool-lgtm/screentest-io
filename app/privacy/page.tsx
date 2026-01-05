export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2026</p>
        
        <div className="prose prose-lg max-w-none space-y-8 bg-white rounded-2xl shadow-lg p-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Our Commitment to Privacy</h2>
            <p className="text-gray-600">
              ScreenTest.io is committed to protecting your privacy. We believe in transparency and 
              your right to control your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            <p className="text-gray-600">
              <strong>Short answer: Very little.</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>No Personal Information:</strong> We do not collect names, emails, or personal data</li>
              <li><strong>No Accounts:</strong> We don't require signups or logins</li>
              <li><strong>No Tracking:</strong> We don't track your browsing across other websites</li>
              <li><strong>Anonymous Analytics:</strong> We may collect anonymous usage statistics (page views, tool usage) to improve our service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">How We Use Information</h2>
            <p className="text-gray-600">
              Any anonymous data we collect is used solely to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Improve our tools and services</li>
              <li>Understand which tools are most popular</li>
              <li>Fix bugs and technical issues</li>
              <li>Optimize website performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Cookies</h2>
            <p className="text-gray-600">
              We use minimal cookies only for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Basic website functionality</li>
              <li>Anonymous analytics (if Google Analytics is enabled)</li>
            </ul>
            <p className="text-gray-600 mt-2">
              We do not use cookies for advertising or tracking purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Third-Party Services</h2>
            <p className="text-gray-600">
              We may use third-party services for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Hosting:</strong> Vercel (secure, privacy-focused hosting)</li>
              <li><strong>Analytics:</strong> Google Analytics (anonymous data only)</li>
            </ul>
            <p className="text-gray-600 mt-2">
              These services have their own privacy policies. We choose providers that respect user privacy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
            <p className="text-gray-600">
              All connections to ScreenTest.io are encrypted via HTTPS. We implement industry-standard 
              security measures to protect any data collected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Children's Privacy</h2>
            <p className="text-gray-600">
              Our services are safe for all ages. We do not knowingly collect personal information 
              from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
            <p className="text-gray-600">
              Since we don't collect personal information, there's no personal data to request, modify, or delete. 
              You can use our tools completely anonymously.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this privacy policy from time to time. Changes will be posted on this page 
              with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            <p className="text-gray-600">
              Questions about our privacy policy? Email us at{' '}
              <a href="mailto:privacy@screentest.io" className="text-blue-600 hover:underline font-semibold">
                privacy@screentest.io
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
