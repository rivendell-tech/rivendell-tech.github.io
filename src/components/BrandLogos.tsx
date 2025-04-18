import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const brands = [
  {
    name: 'TradingView',
    logo: '/logos/tradingview.svg'
  },
  {
    name: 'Nasdaq',
    logo: '/logos/nasdaq.png'
  },
  {
    name: 'Barron\'s',
    logo: '/logos/barrons.svg'
  },
  {
    name: 'Wiley',
    logo: '/logos/wiley.svg'
  },
  {
    name: 'Perplexity',
    logo: '/logos/perplexity.png'
  },
  {
    name: 'OpenAI',
    logo: '/logos/openai.png'
  },
  {
    name: 'Google Colab',
    logo: '/logos/colab.png'
  },
  {
    name: 'OpenBB',
    logo: '/logos/openbb.svg'
  },
  {
    name: 'cTrader',
    logo: '/logos/ctrader.png'
  },
  {
    name: 'FTMO',
    logo: '/logos/ftmo.svg'
  },
  {
    name: 'FPMarkets',
    logo: '/logos/fpmarkets.png'
  }
]

const BrandLogos = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const speedRef = useRef(0.3); // pixels per frame

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    
    if (!container || !track) return;
    
    // Calculate the width of a single set of logos
    const trackWidth = track.scrollWidth / 2;
    
    // Set up the CSS for smooth scrolling
    track.style.width = `${trackWidth * 2}px`;
    track.style.display = 'flex';
    track.style.flexWrap = 'nowrap';
    
    const animate = () => {
      if (!isHovered) {
        positionRef.current -= speedRef.current;
        
        // Reset position when we've scrolled one full set of logos
        if (Math.abs(positionRef.current) >= trackWidth) {
          positionRef.current = 0;
        }
        
        track.style.transform = `translateX(${positionRef.current}px)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start the animation
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

  return (
    <section className="py-16 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
          Brands We Trust
        </h2>
        
        <div 
          ref={containerRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={trackRef}
            className="flex space-x-8 transition-transform duration-100"
          >
            {brands.concat(brands).map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-16 w-full flex items-center justify-center p-4">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="h-12 w-auto object-contain filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:invert dark:brightness-0 dark:contrast-200"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
          These are some of the trusted platforms and tools we use in our analysis and trading.
        </p>
      </div>
    </section>
  )
}

export default BrandLogos 