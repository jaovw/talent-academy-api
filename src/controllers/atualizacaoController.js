import model from "../models/produto.js"
import { dbConnect } from "../db/connection.js"
import { logger } from "../utils/logger.js"

async function atualizaProduto(req, res) {

    const data = new Date().getTime()

    const id = req.params.id

    const {
        code,
        product_name
    } = req.body


    const param = {
        code: code,
        product_name: product_name,
        status: 'draft',
        imported_t: data
    }

    try {

        await dbConnect()

        const item = await model.findOne({ _id: id })

        if (!item) {
            return res.status(500).json({ message: `Item ${id} nao encontrado.` })
        }


        await model.updateOne({ _id: id }, param)

        res.status(200).json({

            id: id,
            nome: item.product_name,
            message: 'Item atualizado com sucesso'
        })
    } catch (e) {
        logger.error(e)
        res.status(500).json({ message: 'Erro no put, verifique o body ...' })
    }
}

export { atualizaProduto }