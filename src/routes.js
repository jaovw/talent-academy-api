import { Router } from "express"
import { status } from "./controllers/statusController.js"
import { getProdutosId, getProdutos } from "./controllers/listagemController.js"
import { deleteProdutos } from "./controllers/exclusaoController.js"
import { atualizaProduto } from "./controllers/atualizacaoController.js"

const router = Router()

router.get('/', status)

router.get('/products', getProdutos)

router.get('/products/:id', getProdutosId)

router.put('/products/:id', atualizaProduto)

router.delete('/products/:id', deleteProdutos)

export default router