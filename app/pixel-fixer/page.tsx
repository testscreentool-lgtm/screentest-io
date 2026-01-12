import type { Metadata } from 'next'
import PixelFixerClient from './PixelFixerClient'

export const metadata: Metadata = {
  title: 'Pixel Fixer – Free Online Stuck Pixel Repair Tool',
  description:
    'Use this free pixel fixer tool to detect and refresh stuck pixels by rapidly cycling colors on your screen.',
  alternates: {
    canonical: 'https://screentest.io/pixel-fixer'
  }
}

export default function Page() {
  return (
    <>
      <PixelFixerClient />

      <article className="max-w-4xl mx-auto px-4 py-16 prose">
        <h2>What Is a Pixel Fixer?</h2>
        <p>
          A pixel fixer is a screen testing tool designed to help identify and
          refresh stuck pixels by rapidly cycling solid colors across the display.
          Stuck pixels occur when a subpixel remains locked on a single color.
        </p>

        <h2>How the Pixel Fixer Tool Works</h2>
        <p>
          This tool displays high-contrast colors such as red, green, blue, black,
          and white at a fast refresh rate. The rapid stimulation can sometimes
          encourage stuck subpixels to resume normal behavior.
        </p>

        <h2>How to Use the Pixel Fixer</h2>
        <ol>
          <li>Click “Start Pixel Fixer”</li>
          <li>Allow fullscreen mode</li>
          <li>Let it run for 10–30 minutes</li>
          <li>Press ESC or click to exit</li>
        </ol>

        <h2>Stuck Pixels vs Dead Pixels</h2>
        <p>
          Stuck pixels may respond to software stimulation. Dead pixels are usually
          hardware failures and cannot be repaired by software tools.
        </p>

        <h2>Who Should Use This Tool?</h2>
        <ul>
          <li>New monitor buyers</li>
          <li>Laptop and TV owners</li>
          <li>Gamers and designers</li>
          <li>Repair technicians</li>
        </ul>

        <h2>Related Screen Test Tools</h2>
        <ul>
          <li><a href="/white-screen">White Screen Test</a></li>
          <li><a href="/black-screen">Black Screen Test</a></li>
          <li><a href="/dead-pixel-test">Dead Pixel Test</a></li>
        </ul>
      </article>
    </>
  )
}
