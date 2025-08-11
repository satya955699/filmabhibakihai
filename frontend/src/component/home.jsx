import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import Nav from "./nav";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Dynamic photo data array
  const photoData = [
    { id: 1, row: 1, col: 3, seed: "1-7", title: "Photo 1-7", description: "Beautiful landscape captured in stunning detail." },
    { id: 2, row: 1, col: 9, seed: "1-2", title: "Photo 1-2", description: "Amazing scenery with perfect composition." },
    { id: 3, row: 2, col: 2, seed: "2-4", title: "Photo 2-4", description: "Stunning natural beauty in every frame." },
    { id: 4, row: 2, col: 6, seed: "2-6", title: "Photo 2-6", description: "Captivating moments frozen in time." },
    { id: 5, row: 3, col: 1, seed: "3-1", title: "Photo 3-1", description: "Breathtaking views that inspire wonder." },
    { id: 6, row: 3, col: 7, seed: "3-5", title: "Photo 3-5", description: "Nature's masterpiece in vivid colors." },
    { id: 7, row: 4, col: 3, seed: "4-3", title: "Photo 4-3", description: "Serene landscapes that calm the soul." },
    { id: 8, row: 4, col: 8, seed: "4-8", title: "Photo 4-8", description: "Epic vistas that tell stories." },
    { id: 9, row: 5, col: 2, seed: "5-2", title: "Photo 5-2", description: "Elegant fashion statement with style." },
    { id: 10, row: 5, col: 6, seed: "5-6", title: "Photo 5-6", description: "Timeless elegance in every detail." },
    { id: 11, row: 6, col: 4, seed: "6-4", title: "Photo 6-4", description: "Sophisticated design meets comfort." },
    { id: 12, row: 6, col: 7, seed: "6-7", title: "Photo 6-7", description: "Premium quality with modern flair." },
    { id: 13, row: 7, col: 1, seed: "7-1", title: "Photo 7-1", description: "Classic style with contemporary edge." },
    { id: 14, row: 7, col: 5, seed: "7-5", title: "Photo 7-5", description: "Effortless sophistication in every piece." },
    { id: 15, row: 8, col: 3, seed: "8-3", title: "Photo 8-3", description: "Refined elegance for the modern individual." },
    { id: 16, row: 8, col: 8, seed: "8-8", title: "Photo 8-8", description: "Distinctive fashion that speaks volumes." }
  ];

  // Refs for each card
  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Only initialize Lenis and GSAP animations on desktop/tablet
    if (isMobile) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on('scroll', ScrollTrigger.update);
    
    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.to(ref, {
          x: 50,
          y: -50,
          scrollTrigger: {
            trigger: ref,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            toggleActions: "play none none reverse",
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      lenis.destroy();
    };
  }, [isMobile]);
  
  const helo=useRef(null)
  const scrolltoaction=()=>{
    helo.current.scrollIntoView({
      behavior:"smooth",
      block:"start",
    })
    
  }

  return (
    <div>
      <div className="  m-6    absolute  md:flex hidden ">

        <Button className="   " onClick={()=>{scrolltoaction()}}>< ArrowDownwardIcon /></Button>
      </div>
      <div className="hidden md:flex md:h-[200vh] overflow-hidden bg-gray-900">

        <div ref={containerRef} className="grid grid-cols-8 grid-rows-8 gap-4 max-w-7xl mx-auto">
  
          {photoData.map((photo, i) => (
            <div
              key={photo.id}
              ref={el => cardRefs.current[i] = el}
              style={{ 
                gridColumn: `${photo.col} / span 1`,
                gridRow: `${photo.row} / span 1`
              }}
              className="w-60 items-center"
            >
              <div className="bg-white rounded-lg   shadow-2xl   shadow-gray-900 overflow-hidden">
                <img 
                  src={`/${i}.jpg`} 
                  className="bg-cover w-full md:h-[20vh] content-center" 
                  alt={photo.title} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Grid Layout */}
      <div className="md:hidden h-auto bg-gray-900 py-8">
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto px-4">
          {photoData.slice(0, 8).map((photo, i) => (
            <div
              key={photo.id}
              className="w-full"
            >
              <div className="bg-white rounded-lg overflow-hidden">
                <img 
                  src={`/${i}.jpg`} 
                  className="bg-cover w-full h-32 object-cover" 
                  alt={photo.title} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="fixed justify-center items-center text-white font-bold tracking-wider font-Poppins top-32 z-[2] w-full">
        <div className="hidden md:block">
          <div className="flex justify-center">
            <img className="h-[20vh] w-[15vw]" type="image" src="\workmark white.png" alt="" />
          </div>
          <div className="flex justify-center mt-4">
            {"FILMABHIBAKIHAI".split("").map((char, idx) => (
              <span
                key={idx}
                style={{
                  color: idx >=1 ? "#fff" : "#ff4b2b",
                  transition: "color 0.3s",
                }}
                className="transition-colors duration-300 text-2xl"
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden text-center px-4">
          <div className="flex justify-center mb-4">
            <img className="h-12" type="image" src="\workmark white.png" alt="" />
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            {"FILMABHIBAKIHAI".split("").map((char, idx) => (
              <span
                key={idx}
                style={{
                  color: idx <= 0 ? "#fff" : "#ff4b2b",
                  transition: "color 0.3s",
                }}
                className="transition-colors duration-300 text-lg"
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>

   
      <div ref={helo} className="  bg-gray-800 z-[999] relative text-white overflow-hidden">
        <Nav />
      </div>
    </div>
  );
}

export default Home;