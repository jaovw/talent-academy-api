import { Router } from "express"
import { dbConnect } from "./db/connection.js"
import { insertDb } from "./db/insert.js"

const router = Router()

router.get('/', async (req, res) => {

    await insertDb()
    res.send('Hello World')
})

export default router