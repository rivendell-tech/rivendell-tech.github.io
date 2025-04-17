const PodcastWidget = () => {
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto container-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
          Latest Episodes
        </h2>
        
        <div className="max-w-4xl mx-auto glass-card p-6">
          <iframe
            src="https://open.spotify.com/embed/show/2uo4tPdW29rqB9Shhd8hcK"
            width="100%"
            height="352"
            frameBorder="0"
            allow="encrypted-media"
            className="rounded-xl"
          />
          
          <div className="mt-6 text-center">
            <a
              href="https://open.spotify.com/show/2uo4tPdW29rqB9Shhd8hcK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
            >
              View All Episodes →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PodcastWidget 