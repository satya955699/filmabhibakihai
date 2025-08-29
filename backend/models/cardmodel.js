import db from "../config/db.js"
export const cardmodel=async(data)=>{
    try{
        const result=db.query("INSERT INTO card (moviename,relaseyear, gener, duration, movietitle, rating, description, review, imgurl) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);",[data.MovieName,data.Releaseyear,data.Gener,data.Duration,data.MovieTitle,data.Rating,data.description,data.review,data.imageurl])
        return "done"
        
    }catch(error){
        console.log(" error  at cardmodel.js")
    }

}