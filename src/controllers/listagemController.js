import { dbConnect } from "../db/connection.js"
import model from "../models/produto.js"
import { logger } from "../utils/logger.js"

async function getProdutos(req, res) {

    try {

        await dbConnect()

        const listagem = await model.find()

        return res.status(200).send(listagem)

    } catch (e) {
        logger.error(e)
        res.status(500).json({ error: e })
    }
}

async function getProductsId(req, res) {

    const id = req.params.id

    try {

        await dbConnect()

        const item = await model.findOne({ _id: id })

        return res.status(200).send(item)

    } catch (e) {
        logger.error(e)
        res.status(500).json({ error: e })
    }
}

export { getProdutos, getProductsId }