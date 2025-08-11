function Navtwo(){
    return(
        <section id="instagram" className="py-12 md:py-20 bg-gray-800 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 px-4">As Seen On <span className="gradient-text"><i className="fab fa-instagram"></i> Instagram</span></h2>
            <div className="max-w-4xl    bg-gray-900 rounded-lg shadow-xl overflow-hidden  mx-auto">
                <div className="p-4 md:p-6 border-b border-gray-700">
                    <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                        <img src="/PFP.png" alt="Profile Picture" className="w-20 h-20 md:w-32 md:h-32 rounded-full border-4 border-gray-700 mb-4 md:mb-0" />
                        <div className="md:ml-6 flex-grow">
                            <div className="flex flex-col md:flex-row items-center md:items-start mb-2 gap-2 md:gap-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white">FILMABHIBAKIHAI</h3>
                                <a target="_blank" href="https://www.instagram.com/filmabhibaakihai?utm_source=ig_web_button_share_sheet&igsh=MWFuczhlMnI2cGs5NQ==" className="bg-sky-500 text-white text-sm font-semibold px-4 py-1 rounded-md hover:bg-sky-600 transition">Follow</a>
                            </div>
                            <div className="hidden md:flex space-x-8 text-gray-300">
                                <span><span className="font-bold text-white">779</span> posts</span>
                                <span><span className="font-bold text-white">144k</span> followers</span>
                                <span><span className="font-bold text-white">981</span> following</span>
                            </div>
                            <p className="text-gray-400 mt-2 text-sm leading-relaxed">Movie Reviews | Digital Art 🎨<br />Bringing cinema to life through critique & creativity.<br />DM for collabs & commissions 👇 <a href="#" className="text-sky-400">linktr.ee/cinescope</a></p>
                        </div>
                    </div>
                    <div className="flex justify-around md:hidden text-gray-300 mt-4 text-center">
                        <span><span className="font-bold text-white">128</span><br />posts</span>
                        <span><span className="font-bold text-white">12.1k</span><br />followers</span>
                        <span><span className="font-bold text-white">302</span><br />following</span>
                    </div>
                </div>
                <div id="instagram-grid" className="grid  grid-cols-2 md:grid-cols-3 gap-2 md:gap-1 p-4 md:p-6">
                    
                    {Array.from({length:6}).map(()=>{
                        return(

                            <div className="bg-gray-700 h-32 rounded-lg flex items-center justify-center text-gray-400">
                        <span>Post 1</span>
                    </div>
                        )
                    })}
                   
                </div>
            </div>
        </div>
    </section>

    )
}
export default Navtwo