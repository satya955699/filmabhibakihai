import Rating from "@mui/material/Rating"
import axios from "axios"
import { useEffect } from "react"


function Card(props){
   
    return(
        <div className="group relative block top-8 my-8 rounded-lg overflow-hidden bg-gray-900 hover:bg-gray-800 shadow-lg mx-2">
            
            <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-start justify-between">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500 bg-gray-900/70 px-2 py-1 rounded">
                        {props.moviename}
                    </p>
                    <div className=" flex">

                        <Rating value={3.5} precision={0.5} readOnly />
                    <div className="text-white bg-gray-800 px-2 py-1 rounded">
                        {props.rating}
                    </div>
                    </div>
                </div>

                <div className="mt-4 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="w-full md:w-60">
                        <img className="w-full h-72 md:h-60 object-cover rounded-4xl" src={props.imgurl} alt="Movie Poster" />
                    </div>
                    <div className="w-full md:flex-1">
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-400 font-semibold">gener:</span>
                                <span className="text-pink-400">{props.gener}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-400 font-semibold">Duration:</span>
                                <span className="text-blue-400">{props.duration}m</span>
                            </div>
                            <div>
                                <span className="text-gray-400 font-semibold">Review:</span>
                                <p className="text-gray-300 mt-1 text-sm">
                                    A gripping tale of suspense and emotion, this movie follows the journey of a protagonist as they navigate unexpected challenges and uncover hidden truths. With stunning visuals and a compelling narrative, it's a must-watch for fans of the genre.
                                    {props.review}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" md:absolute  inset-x-0 hidden  md:flex bottom-0 ">
                <div className="bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent p-4 sm:p-6 transform md:translate-y-full md:opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="text-2xl font-bold text-pink-500">movie title</h3>
                    <p className="text-sm text-gray-300 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolor aperiam voluptates aut dolorem assumenda, vero quisquam, minima blanditiis similique voluptas doloremque autem quis ducimus nulla illum culpa veniam accusamus mollitia! Dolorum aliquid tempore quia dolore laudantium aliquam veniam, eligendi voluptatibus maiores beatae. Fugit reprehenderit, doloremque dolor aut laudantium animi ad minus sit corporis esse aliquid error officiis laboriosam odit rerum iusto, ab et repellat eligendi soluta nesciunt totam optio. Possimus eaque laborum repudiandae nesciunt minus nam placeat autem atque?
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Card