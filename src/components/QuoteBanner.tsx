import { motion } from 'framer-motion'

const QuoteBanner = () => {
  return (
    <section className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-400 to-transparent" />
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <blockquote className="text-2xl md:text-4xl font-light text-white leading-relaxed">
            "The path to better understanding the economy requires treating the economy as the complex system that it really is."
          </blockquote>
          <cite className="block mt-8 text-primary-300 text-lg">
            <a href="https://www.ineteconomics.org/uploads/papers/farmer_berlinpaper.pdf?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">J. Doyne Farmer, Complexity Economics</a>
          </cite>
        </motion.div>
      </div>
    </section>
  )
}

export default QuoteBanner 