import Portnav from "./portnav"
import Card from "./card"
import { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import axios from "axios"



function Review(){

    const [data,setdata]=useState([])
    const next=0
    useEffect(()=>{
        const call=async()=>{
            try{
                const result=await axios.post("/api/card",{number:next})
                setdata(result.data)
            }catch(error){
                console.log(" error at get card ")
            }
        }
        call()

    },[])
    return(
        <div>
            <Portnav/>
            askdfjsdaklj
            <div>
                {data.map((e,index)=>{
                    return(
                        <Card key={index} moviename={e.moviename} gener={e.gener}  duration={e.duration} rating={e.rating} relaseyear={e.relaseyear} review={e.review} imgurl={e.imgurl} movititle={e.movietitle} description={e.description}/>
                    )
                })}
                <div className={ ` ${next>5?"flex":"hidden"} bg-gray-900  mt-14   justify-center`}>
                    <Button sx={{color:"pink"}}>
                        ...Prev
                    </Button>
                    <Button sx={{color:"pink"}}>
                    next...
                    </Button>
                </div>


    </div>
  </div>





        
    )
}
export default Review