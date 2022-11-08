import { logger } from "../utils/logger.js"
import { dbConnect } from "./connection.js"
import model from "../models/produto.js"

const data = new Date().getTime()

async function insertDb() {
    let param = {
        code: 12345,
        product_name: "Produto teste 05",
        imported_t: data
    }
    try {
        await dbConnect()
        await model.create(param)
        logger.info('produto cadastrado')
    } catch (e) {
       logger.error(e) 
    }
}

export { insertDb }