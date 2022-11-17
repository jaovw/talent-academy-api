import { unzipArquivos } from "../utils/metodoUnzip.js"
import { getArquivos } from "./getArquivos.js"
import { logger } from "../utils/logger.js"

// CONTROLEER PARA REALIZAR O UNZIP DAS FILES BAIXADAS
async function transformaDados() {

    const nomeArquivos = await getArquivos()

    try {
        for (let i = 0; i < nomeArquivos.length; i++) {

            const nome = nomeArquivos[i]
            await unzipArquivos(nome)

        }

        return true

    } catch (e) {
        logger.error(e)
    }
}

export { transformaDados }