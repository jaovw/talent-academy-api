import { Router } from "express"
import { status } from "./controllers/statusController.js"
import { getProductsId, getProdutos } from "./controllers/listagemController.js"
import { deleteProdutos } from "./controllers/exclusaoController.js"

const router = Router()

router.get('/', status)

router.get('/products', getProdutos)

router.get('/products/:id', getProductsId)

router.delete('/products/:id', deleteProdutos)

export default router