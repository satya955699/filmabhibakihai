import pg from "pg"
import { config } from "dotenv"
config({path:"./config/config.env"})
console.log("helo",process.env.PORT)
const db=  new pg.Pool({
    user: process.env.USER,
    host: process.env.HOST,
    port: process.env.DPORT,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    ssl: {
      rejectUnauthorized: false,
    },
  })
export default db