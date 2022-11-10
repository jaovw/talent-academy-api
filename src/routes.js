import { Router } from "express"
import { getArquivos } from "./controllers/getArquivos.js"
import { downloadDados } from "./controllers/downloadDados.js"
import { transformaDados } from "./controllers/tranformaDados.js"
import { status } from "./controllers/statusController.js"
import { getProductsId, getProdutos } from "./controllers/listagemController.js"

const router = Router()

router.get('/', status)

router.get('/products', getProdutos)

router.get('/products/:id', getProductsId)

export default router