import express from "express"
import router from "./src/routes.js"
import { logger } from "./src/utils/logger.js"

const port = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(router)

const server = app.listen(port, () => {
    logger.info(`API rodando na porta ${port}.`)
})

export { app, server }