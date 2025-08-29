import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Portnav(){
    const navigate=useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    return(
        <div>
              <div
        className="flex fixed md:top-0 top-0 opacity-100 h-[9vh] left-0 z-[99] transition-all duration-200 ease-in-out w-full shadow-2xl rounded-b-md font-bold py-2 md:py-3 text-lg md:text-2xl tracking-widest font-montserrat bg-gray-700 justify-between px-4 md:px-8 items-center"
      >
        <div>
          <img className="h-8 md:h-10" src="\workmark white.png" alt="" />
        </div>
        <div className="hidden lg:flex justify-between">
          {["About", "Review", "Mylist", "Contact"].map((e, index) => {
            return (
              <div onClick={()=>{navigate(`/${e}`)}}
                key={index}
                className="px-4 md:px-8 py-2  cursor-pointer text-lg font-medium text-gray-200 rounded-full hover:bg-[#ff4b2b] hover:text-white transition-all duration-300"
              >
                {e}
              </div>
            );
          })}
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-[#ff4b2b] focus:outline-none p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
        <div className="lg:hidden fixed top-[10vh] left-0 z-50 w-full   bg-gray-700 border-t border-gray-600 shadow-lg">
          <div className="flex flex-col py-2">
            {["About", "Review", "Mylist", "Contact"].map((e, index) => {
              return (
                <div
                  onClick={()=>{navigate(`/${e}`)}}
                  key={index}
                  className="hover:text-[#ff4b2b] hover:bg-gray-600 px-6 py-4 cursor-pointer text-lg transition-all duration-200 border-b border-gray-600 last:border-b-0"
                >
                  {e}
                </div>
              );
            })}
          </div>
        </div>
      )}
      </div>

        </div>
    )
}
export default Portnav