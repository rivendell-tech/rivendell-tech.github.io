import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

// Components will be imported here as we create them
import Hero from './components/Hero'
import PodcastWidget from './components/PodcastWidget'
import MarketTicker from './components/MarketTicker'
import SocialLinks from './components/SocialLinks'
import Mission from './components/Mission'
import QuoteBanner from './components/QuoteBanner'
import Updates from './components/Updates'
import About from './components/About'
import BrandLogos from './components/BrandLogos'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-auto">
              <img src="/logo.svg" alt="Rivendell Tech" className="h-12 w-auto block dark:hidden" />
              <img src="/logo-white.svg" alt="Rivendell Tech" className="h-12 w-auto hidden dark:block" />
            </div>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative pt-16">
        <Hero />
        <MarketTicker darkMode={darkMode} />
        <PodcastWidget />
        <Mission />
        <QuoteBanner />
        <Updates />
        <About />
        <BrandLogos />
        <SocialLinks />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-8 text-center text-sm text-gray-600 dark:text-gray-400">
        <div className="container mx-auto px-4">
          <p className="mb-4">
            © {new Date().getFullYear()} Rivendell Tech. All rights reserved.
          </p>
          <p className="text-xs max-w-2xl mx-auto">
            Disclaimer: Rivendell Tech provides educational content and curated insights for informational purposes only. 
            This is not financial advice. Always conduct your own research and consult with a licensed professional before 
            making any trading decisions.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
