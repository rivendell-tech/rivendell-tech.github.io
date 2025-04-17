import { motion } from 'framer-motion'

const Mission = () => {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
            Our Mission
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            We believe in systematic thinking, strategic precision, and staying ahead of global macro trends through data and research.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Systematic Thinking',
                description: 'Applying rigorous quantitative methods to identify market opportunities.'
              },
              {
                title: 'Strategic Precision',
                description: 'Executing trades with calculated precision and risk management.'
              },
              {
                title: 'Data-Driven Research',
                description: 'Leveraging advanced analytics to stay ahead of market trends.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Mission 