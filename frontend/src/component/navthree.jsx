function Navthree(){
    return(
        <section id="services" className="bg-gray-900 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-6 px-4">
            Creative <span className="gradient-text">Services</span>
          </h2>
          <p className="text-center text-gray-400 mb-8 md:mb-12 px-4 text-sm md:text-base">
            Elevating brands with unique visual storytelling.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-center px-4">
            {/* Service 1 */}
            <div className="bg-gray-800 p-6 md:p-8 rounded-lg card-hover-effect hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-sky-400 mb-4">
                <i className="fas fa-paint-brush text-3xl md:text-4xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                Digital Art / Editorial Illustration
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Custom illustrations and digital paintings that capture the essence
                of a film or story, perfect for articles and promotional materials.
              </p>
            </div>
  
            {/* Service 2 */}
            <div className="bg-gray-800 p-6 md:p-8 rounded-lg card-hover-effect hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-indigo-400 mb-4">
                <i className="fas fa-id-card text-3xl md:text-4xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                Visual Identity / Digital Assets
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Crafting complete brand identities, including logos, color
                palettes, and social media kits that resonate with your audience.
              </p>
            </div>
  
            {/* Service 3 */}
            <div className="bg-gray-800 p-6 md:p-8 rounded-lg card-hover-effect hover:transform hover:scale-105 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="text-teal-400 mb-4">
                <i className="fas fa-mountain-city text-3xl md:text-4xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Environmental Design</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Conceptualizing and designing immersive visual experiences for
                events, spaces, or digital environments, bringing narratives to
                life.
              </p>
            </div>
          </div>
        </div>
      </section>

    )
}
export default Navthree