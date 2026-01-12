// GUIDE TEMPLATE - Following 86-Instruction Framework
// File: /app/guides/[guide-name]/page.tsx

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GUIDE TITLE: Primary Keyword | Secondary Keyword',
  description: 'Compelling 155-160 character description with primary keyword and benefits. Include numbers and year for freshness.',
  keywords: ['primary keyword', 'secondary keyword', 'long-tail keyword', 'related keyword', 'question keyword'],
  authors: [{ name: 'ScreenTest Team' }],
  alternates: { canonical: 'https://screentest.io/guides/guide-name' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'GUIDE TITLE',
    description: 'Social media description',
    type: 'article',
    publishedTime: '2025-01-12T00:00:00Z',
  },
}

// FAQ Schema - CRITICAL for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question from PAA research?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer with bold statistics and specific timeframe. Example: Professional displays achieve Delta E < 2 accuracy, meaning colors are visually indistinguishable from standards. This requires calibration every 6 months for photographers."
      }
    },
    {
      "@type": "Question",
      "name": "Second PAA question?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Second answer with numbers and specifics."
      }
    },
    {
      "@type": "Question",
      "name": "Third PAA question?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Third answer with actionable advice."
      }
    }
  ]
}

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "GUIDE TITLE",
  "description": "Article description",
  "author": {
    "@type": "Organization",
    "name": "ScreenTest"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ScreenTest",
    "logo": {
      "@type": "ImageObject",
      "url": "https://screentest.io/logo.png"
    }
  },
  "datePublished": "2025-01-12",
  "dateModified": "2025-01-12"
}

export default function GuidePage() {
  return (
    <>
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Current Guide</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="text-sm text-blue-600 font-semibold mb-2">CATEGORY NAME</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Primary Keyword Guide Title
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Compelling subtitle that includes secondary keyword and hints at the benefit/outcome
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>📅 Updated January 2025</span>
            <span>⏱️ 12 min read</span>
            <span>✍️ ScreenTest Team</span>
          </div>
        </header>

        {/* Table of Contents - Optional but good for long guides */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
          <h2 className="font-bold text-gray-900 mb-3">📋 In This Guide:</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#section1" className="text-blue-600 hover:underline">Question-based section heading?</a></li>
            <li><a href="#section2" className="text-blue-600 hover:underline">Second question heading?</a></li>
            <li><a href="#section3" className="text-blue-600 hover:underline">Third question heading?</a></li>
          </ul>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Introduction - Featured Snippet Style */}
          <section className="mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <p className="text-gray-800 font-medium">
                <strong>Quick Answer:</strong> Main answer with <strong>bold statistics</strong> and <strong>specific timeframe</strong>. 
                Example: Professional monitor calibration takes <strong>15-30 minutes</strong> and improves color accuracy by <strong>85%</strong> 
                when performed with proper tools. Calibrate every <strong>6 months</strong> for consistent results.
              </p>
            </div>

            <p className="mb-4">
              Opening paragraph that hooks the reader with a relatable problem or surprising fact. Natural conversational tone.
            </p>

            <p className="mb-4">
              Expand on the problem. Show you understand the reader's situation. Use "you" and "your" naturally.
            </p>
          </section>

          {/* Main Content Sections - Use Question-Based H2s */}
          <section id="section1" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Question-Based Heading from PAA Research?
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <p className="text-gray-800 font-medium">
                Featured snippet style answer with <strong>bold numbers</strong>: Most monitors require <strong>30-60 seconds</strong> 
                testing per color to detect <strong>95%</strong> of defects. Professional QA teams test <strong>6 colors minimum</strong> 
                achieving <strong>90%+ detection rates</strong> in <strong>2-3 minutes</strong> total.
              </p>
            </div>

            <p className="mb-4">
              Detailed explanation. Use natural conversational language. Break down complex topics into understandable chunks.
            </p>

            {/* HTML/CSS Infographic Example */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 my-8 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                📊 Key Statistics
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                  <div className="text-sm text-gray-600">Improvement Rate</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-green-600 mb-2">30min</div>
                  <div className="text-sm text-gray-600">Average Time</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-purple-600 mb-2">$0</div>
                  <div className="text-sm text-gray-600">Cost with Free Tools</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Question-based H3 Sub-section?
            </h3>

            <p className="mb-4">
              Continue with detailed information. Use personal experiences and specific examples where possible.
            </p>
          </section>

          {/* Second Major Section */}
          <section id="section2" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Do You [Action] [Topic]?
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <p className="text-gray-800 font-medium">
                Step-by-step process takes <strong>15-20 minutes</strong> for beginners, <strong>5-10 minutes</strong> for 
                experienced users. Professional results achieved in <strong>80%</strong> of cases following this method.
              </p>
            </div>

            {/* Step-by-step with HTML/CSS styling */}
            <div className="space-y-6 my-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">First Step Title</h4>
                  <p className="text-gray-600">Detailed explanation of first step. Be specific about what to do and why.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Second Step Title</h4>
                  <p className="text-gray-600">Detailed explanation of second step.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Third Step Title</h4>
                  <p className="text-gray-600">Detailed explanation of third step.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Section - Use Tables */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What's the Difference Between X and Y?
            </h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left">Feature</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Option A</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Option B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Price Range</td>
                    <td className="border border-gray-300 px-4 py-3">$100-200</td>
                    <td className="border border-gray-300 px-4 py-3">$300-500</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Performance</td>
                    <td className="border border-gray-300 px-4 py-3">Good for basics</td>
                    <td className="border border-gray-300 px-4 py-3">Professional grade</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Personal Experience / Case Study - EEAT Signal */}
          <section className="mb-12">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-3">💡 Real-World Experience:</h3>
              <p className="text-gray-700 mb-3">
                "After testing over 200 monitors in our lab, I've found that [specific finding]. Here's what actually works..."
              </p>
              <p className="text-gray-700">
                Personal anecdote that demonstrates expertise and provides unique insight not found elsewhere.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Question from PAA research?
                </h3>
                <p className="text-gray-700">
                  Answer with <strong>bold statistics</strong> and <strong>specific timeframes</strong>. Make it scannable and valuable.
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Second PAA question?
                </h3>
                <p className="text-gray-700">
                  Second answer with concrete numbers and actionable information.
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Third PAA question?
                </h3>
                <p className="text-gray-700">
                  Third answer providing unique value.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion with CTA */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Final Thoughts
            </h2>

            <p className="mb-4">
              Summarize key takeaways. Reinforce main benefit.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 my-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Test Your Display?</h3>
              <p className="text-blue-100 mb-6">
                Use our free professional testing tools to check your monitor for defects.
              </p>
              <Link
                href="/"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Start Testing Now →
              </Link>
            </div>
          </section>

          {/* Related Resources */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Related Resources
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/guides/related-guide-1" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Related Guide 1</h3>
                <p className="text-sm text-gray-600">Brief description of related content.</p>
              </Link>

              <Link href="/dead-pixel-test" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Dead Pixel Test</h3>
                <p className="text-sm text-gray-600">Test your display for pixel defects.</p>
              </Link>

              <Link href="/guides/related-guide-3" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Related Guide 3</h3>
                <p className="text-sm text-gray-600">More helpful information.</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  )
}
