import { Router } from "express"
import { getArquivos } from "./controllers/getArquivos.js"
import { downloadDados } from "./controllers/downloadDados.js"
import { transformaDados } from "./controllers/tranformaDados.js"
import { status } from "./controllers/statusController.js"

const router = Router()

// router.get('/', async (req, res) => {
   
//     const nomeArquivos = await getArquivos()
//     await downloadDados()
//     await transformaDados()
//     res.send({resposta: nomeArquivos})
// })

router.get('/', status)

export default router