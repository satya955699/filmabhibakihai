import Button from "@mui/material/Button"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import { useGSAP } from '@gsap/react';
import { useNavigate} from "react-router-dom";

function Navone(){
    const navigate=useNavigate()
    const name = useRef(null)
    const photo=useRef(null)
    
    useGSAP(()=>{
        if (window.innerWidth >= 768) {
            gsap.from(".name",{opacity:0,y:100,ease:"elastic.inOut",duration:1,scrollTrigger:{trigger:".name"}})
            gsap.from(".photo",{x:-100,opacity:0,ease:"back.inOut",duration:0.8,scrollTrigger:{trigger:".photo"}})
        }
    })
    
    return(
        <div id="helo" className="hero-section min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-12">
                <div className="bg-white h-0.5 flex   mt-8 md:mt-10 w-full  max-w-4xl mx-auto"></div>
                        <h1  id="name" className="  text-center md:text-left py-4 md:py-6 text-shadow-neutral-900 text-shadow-2xl font-bold text-4xl md:text-6xl lg:text-7xl leading-tight"> 
                            <span  className="  text-[#ff4b2b]">F</span>ILMABHIBAKIHAI 
                        </h1>
                        <h2 className="text-center md:text-left text-lg md:text-xl lg:text-2xl text-[#e65f48] font-[Montserrat] mb-8 md:mb-12">Where Every Frame Finds Its Audience</h2>
        
                <div className="flex flex-col lg:flex-row font-serif justify-center lg:justify-evenly items-center gap-8 md:gap-12 mt-6">
                 
                    <img ref={photo} className="  photo border-4 p-2 opacity-100 border-gray-500 rounded-4xl shadow-2xl shadow-black h-48 w-48 md:h-64 md:w-64 lg:h-[70vh] lg:w-auto object-cover" src="/PFP.png" alt="Profile Picture" />
                    <div className="text-center lg:text-left text-2xl md:text-3xl lg:text-4xl max-w-lg lg:max-w-2xl">
                        <div className="text-3xl md:text-4xl lg:text-5xl mb-2">HI <span className="text-[#ff4b2b]">,</span></div>
                        <div  className="mb-4">I Am <span ref={name} className="  name"><span  className="text-[#ff4b2b]">J</span>igyansu Das</span> </div>
                        <div className="text-sm md:text-base lg:text-xl text-gray-200 leading-relaxed">I'm a blogger who brings movies to life on social media. Through my Instagram, I create engaging content that captures new audiences. DM for paid promotions and collaborations.</div>
                        <div><Button onClick={()=>{navigate("/join")}} sx={{ backgroundColor:"#ff4b2b", color:"white",paddingX:"10vw"}}>Join Me</Button></div>
                    </div>
                </div>
            </div>
    )
}
export default Navone