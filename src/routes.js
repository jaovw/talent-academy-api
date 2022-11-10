import { Router } from "express"
import { getArquivos } from "./controllers/getArquivos.js"
import { downloadDados } from "./controllers/downloadDados.js"
import { transformaDados } from "./controllers/tranformaDados.js"

const router = Router()

// router.get('/', async (req, res) => {
   
//     const nomeArquivos = await getArquivos()
//     await downloadDados()
//     await transformaDados()
//     res.send({resposta: nomeArquivos})
// })

router.get('/', () => {
    resizeBy.send('Hello World')
})

export default router