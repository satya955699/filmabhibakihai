import db from "../config/db.js"
export const gcardmodel=async(number)=>{
    try{
        const result= await db.query("select * from card limit 10 offset $1",[number.number])
        return result.rows

    }catch(error){
        console.log("error at gcardmodel.js")
    }
}