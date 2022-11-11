import model from "../models/produto.js"
import { dbConnect } from "../db/connection.js"
import { logger } from "../utils/logger.js"


async function deleteProdutos(req, res) {

    const id = req.params.id

    try {

        await dbConnect()

        const item = await model.findOne({ _id: id })

        if (!item) {
            return res.status(500).json({ message: `Item ${id} nao encontrado.` })
        }

        await model.updateOne({ _id: id }, {status: 'trash'})
        
        res.status(200).json({ message: `Item ${id} excluido.` })

    } catch (e) {
        logger.error(e)
        res.status(500).json({ message: 'Nao foi possivel excluir o registro ...' })
    }
}

export { deleteProdutos }