import { logger } from "../utils/logger.js"
import { dbConnect } from "./connection.js"
import model from "../models/produto.js"
import fs from "fs"

const data = new Date().getTime()

async function insertDb() {
    const readFileLines = filename =>
        fs
            .readFileSync(filename)
            .toString('UTF8')
            .split('\n');

    let arr = readFileLines('./src/files/products_09.txt')

    let lista = []

    try {
        for (let i = 0; i <= 99; i++) {

            const dado = JSON.parse(arr[i])

            lista.push(dado)
        }

        const code = lista.map(e => e.code)
        const product_name = lista.map(e => e.product_name)

        await dbConnect()

        for (let i = 0; i < code.length; i++) {

            const item = await model.findOne({ code: code[i] })

            if (!product_name[i]) {

                product_name[i] = 'Produto sem nome'
            }

            let param = {
                code: code[i],
                product_name: product_name[i],
                imported_t: data
            }

            let patch = {
                imported_t: data,
                status: 'new'
            }

            try {

                item ? await model.updateOne({ _id: item._id }, patch) : await model.create(param)

            } catch (e) {
                console.log(e)
            }

        }

        logger.info('produtos cadastrados')

    } catch (e) {
        logger.error(e)
    }


}
insertDb()