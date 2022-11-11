import { dbConnect } from "../db/connection.js"
import model from "../models/produto.js"
import { logger } from "../utils/logger.js"

async function getProdutos(req, res) {

    const pagina = parseInt(req.query.page)
    const limite = parseInt(req.query.limit)

    const index = (pagina - 1) * limite
    const end = pagina * limite

    try {
        await dbConnect()
        const item = await model.find()

        const results = {}

        if (end < item.length) {
            results.next = {
                pagina: pagina + 1,
                limite: limite
            }
        }

        if (index > 0) {
            results.previus = {
                pagina: pagina - 1,
                limite: limite
            }
        }


        results.results = item.slice(index, end)

        res.status(200).json({
            resultado: results
        })
    } catch (e) {
        logger.error(e)
        res.status(500).json({ error: e.message })
    }

}

async function getProdutosId(req, res) {

    const id = req.params.id

    try {

        await dbConnect()

        const item = await model.findOne({ _id: id })

        return res.status(200).send(item)

    } catch (e) {
        logger.error(e)
        res.status(500).json({ error: e.message })
    }
}

export { getProdutos, getProdutosId }