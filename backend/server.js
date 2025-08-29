import { config } from "dotenv"
config({path:"./config/config.env"})

import express from "express"
import cors from "cors"
import router from "./routes/mainroute.js"
import db from "./config/db.js"

const app=express()
app.use(express.json())
app.use(cors())
const port=process.env.PORT

db.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(" database connect succsesfullly")
    }
})

app.use("/",router)



app.listen(port,()=>{
    console.log(" your port is running on port",port)
})