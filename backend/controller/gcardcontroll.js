import { gcardmodel } from "../models/gcardmodel.js"
export const gcardcontroll=async(req,res)=>{
    try{
        const result= await gcardmodel(req.body)
        res.send(result)
    }catch(errror){
        console.log(" error at gacrdcontroll.js")
    }
}