import express from "express"
import router from "./src/routes.js"

const port = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(router)

const server = app.listen(port, () => {
    console.log(`API rodando na porta ${port}.`)
})

export { app, server }