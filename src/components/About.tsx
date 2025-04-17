import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
            About Rivendell Tech
          </h2>
          
          <div className="glass-card p-8 space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Rivendell Tech specializes in global macro asset strategies, leveraging advanced quantitative methods to identify and capitalize on global economic trends.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We provide curated insights and educational content to navigate the complexities of global financial markets, with a focus on US indices and their key drivers.
            </p>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Our Approach
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-primary-500 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">
                    Advanced quantitative analysis of global markets
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-primary-500 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">
                    Educational content and market insights
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-primary-500 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">
                    Focus on US indices and global macro trends
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-8">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong className="text-gray-700 dark:text-gray-300">Disclaimer:</strong> Rivendell Tech provides educational content and curated insights for informational purposes only. This is not financial advice. Always conduct your own research and consult with a licensed professional before making any trading decisions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 