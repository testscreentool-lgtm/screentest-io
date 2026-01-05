export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2026</p>
        
        <div className="prose prose-lg max-w-none space-y-8 bg-white rounded-2xl shadow-lg p-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Agreement to Terms</h2>
            <p className="text-gray-600">
              By accessing and using ScreenTest.io, you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Description of Service</h2>
            <p className="text-gray-600">
              ScreenTest.io provides free online display testing tools including but not limited to: 
              dead pixel detection, screen calibration, brightness testing, and other monitor diagnostic tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Use of Service</h2>
            <p className="text-gray-600">You agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Use our tools for lawful purposes only</li>
              <li>Not attempt to harm, disrupt, or overload our services</li>
              <li>Not use automated systems to access our tools excessively</li>
              <li>Not reverse engineer or attempt to extract source code</li>
              <li>Not use our service for any commercial scraping or data mining</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Disclaimer of Warranties</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-gray-900 font-semibold mb-2">IMPORTANT - PLEASE READ:</p>
              <p className="text-gray-600 text-sm">
                Our tools are provided "AS IS" and "AS AVAILABLE" without any warranties of any kind, 
                either express or implied. We do not guarantee that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 text-sm space-y-1 mt-2">
                <li>Our tools will be error-free or uninterrupted</li>
                <li>Results will be 100% accurate</li>
                <li>Our tools will detect all display issues</li>
                <li>Our tools will fix hardware problems</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-gray-600 text-sm">
                To the maximum extent permitted by law, ScreenTest.io shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages resulting from:
              </p>
              <ul className="list-disc pl-6 text-gray-600 text-sm space-y-1 mt-2">
                <li>Your use or inability to use our services</li>
                <li>Any hardware damage (our tools operate within normal display parameters)</li>
                <li>Loss of data or profits</li>
                <li>Any decisions made based on tool results</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Health and Safety</h2>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-orange-900 font-semibold mb-2">⚠️ Photosensitive Seizure Warning</p>
              <p className="text-gray-600 text-sm">
                Some tools (Pixel Fixer, certain tests) use rapidly flashing colors. If you have 
                photosensitive epilepsy or seizure disorders, DO NOT use these tools. Stop immediately 
                if you experience discomfort, dizziness, or headaches.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Warranty and Repair</h2>
            <p className="text-gray-600">
              Our tools can help identify display defects, but they:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Do not void manufacturer warranties</li>
              <li>Are informational tools only</li>
              <li>Cannot diagnose all hardware issues</li>
              <li>Should not replace professional testing</li>
            </ul>
            <p className="text-gray-600 mt-2">
              Always check your manufacturer's warranty before attempting any fixes. Some warranties 
              cover dead pixels and display defects.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Intellectual Property</h2>
            <p className="text-gray-600">
              All content, tools, design, and code on ScreenTest.io are owned by ScreenTest.io and 
              protected by intellectual property laws. You may not reproduce, distribute, or create 
              derivative works without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Third-Party Links</h2>
            <p className="text-gray-600">
              Our website may contain links to third-party websites. We are not responsible for the 
              content, privacy policies, or practices of external sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting. Continued use of our services constitutes acceptance of 
              modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Termination</h2>
            <p className="text-gray-600">
              We reserve the right to terminate or suspend access to our services immediately, 
              without prior notice, for conduct that violates these Terms or is harmful to other users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Governing Law</h2>
            <p className="text-gray-600">
              These Terms shall be governed by and construed in accordance with applicable laws. 
              Any disputes shall be resolved in appropriate courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
            <p className="text-gray-600">
              Questions about these Terms? Contact us at{' '}
              <a href="mailto:legal@screentest.io" className="text-blue-600 hover:underline font-semibold">
                legal@screentest.io
              </a>
            </p>
          </section>

          <div className="bg-blue-50 rounded-lg p-6 mt-8">
            <p className="text-blue-900 font-semibold mb-2">Summary in Plain English:</p>
            <p className="text-blue-800 text-sm">
              Use our tools responsibly and at your own risk. We provide them for free to help you test 
              your display, but we can't guarantee they'll catch every issue or that results are perfect. 
              Don't use the flashing tools if you have epilepsy. Be nice, don't abuse the service, and 
              we're here to help!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
