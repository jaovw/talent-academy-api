import express from "express"
import router from "./src/routes.js"
import { jobDownload, jobTratamento } from "./schedule.js"
import { logger } from "./src/utils/logger.js"
import swaggerDocs from "./src/docs/swagger.json" assert {type: "json"}
import swaggerUi from "swagger-ui-express"



const port = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

const server = app.listen(port, async () => {
    logger.info(
    `

        API rodando na porta ${port}.
        Caso queira acessar o ambiente local ou Docker >> http://localhost:3000/api-docs
    `)

    // CRON
    await jobDownload()
    await jobTratamento()
})

export { app, server }