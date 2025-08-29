import { cardmodel } from "../models/cardmodel.js"
export const cardcontroll=async(req,res)=>{
    try{
        const result=await cardmodel(req.body)
        res.send(result)
        

    }catch(error){
        console.log("error  at cardcontroll.js")
    }
}