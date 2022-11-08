import { Router } from "express"
import { dbConnect } from "./db/connection.js"

const router = Router()

router.get('/', async (req, res) => {

    await dbConnect()
    res.send('Hello World')
})

export default router