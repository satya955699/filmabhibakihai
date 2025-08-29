import expres from "express"
import { cardcontroll } from "../controller/cardcontroll.js"
import { gcardcontroll } from "../controller/gcardcontroll.js"

const router=expres.Router()
router.post("/main",cardcontroll)
router.post("/card",gcardcontroll)


export default router