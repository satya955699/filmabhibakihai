import { useState } from "react"
import Portav from "./portnav"
function Contact(){

    const [data,setdata]=useState({email:"",name:"",message:""})

    const change=(e)=>{
        const {name,value}=e.target
        setdata((val)=>({
            
            ...val,[name]:value
        }
        )
        )
        
    }
    console.log(data)
        return(
        <div>
            <Portav/>

        <section id="contact" className="py-20 bg-gray-900 text-gray-200 font-['Inter',_sans-serif]">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold">Get In <span className="gradient-text">Touch</span></h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Have a film you want reviewed, a project to collaborate on, or a promotion inquiry? I'd love to hear from you.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
                

                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-start space-x-4">
                        <div className="bg-indigo-500/20 text-indigo-400 p-3 rounded-full">
                           <i className="fas fa-map-marker-alt text-xl"></i>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">My Location</h3>
                            <p className="text-gray-400">Bhubaneswar, Odisha, India</p>
                        </div>
                    </div>
                     <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-start space-x-4">
                        <div className="bg-sky-500/20 text-sky-400 p-3 rounded-full">
                           <i className="fas fa-envelope text-xl"></i>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Email Me</h3>
                            <a href="mailto:hello@cinescope.com" className="text-gray-400 hover:text-sky-400 transition-colors">hello@cinescope.com</a>
                        </div>
                    </div>
                     <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 contact-icon" aria-label="Instagram"><i className="fab fa-instagram text-3xl"></i></a>
                            <a href="#" className="text-gray-400 contact-icon" aria-label="Twitter"><i className="fab fa-twitter text-3xl"></i></a>
                            <a href="#" className="text-gray-400 contact-icon" aria-label="YouTube"><i className="fab fa-youtube text-3xl"></i></a>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 bg-gray-800 p-8 rounded-lg shadow-2xl">
                    <form >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <input onChange={change} type="text" name="name" placeholder="Your Name" required   className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition" />
                            <input onChange={change} type="email" name="email" placeholder="Your Email" required   className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition" />
                        </div>
                        <div className="mb-6">
                             <textarea onChange={change} name="message" placeholder="Your Message" rows="6" required   className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition"></textarea>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-transform transform hover:scale-105">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-16">
                <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-gray-800">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239486.88295941938!2d85.65592261944832!3d20.29113645313938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1663399319876!5m2!1sen!2sin" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}
export default Contact