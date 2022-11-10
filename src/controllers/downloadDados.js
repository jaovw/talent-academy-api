import { logger } from "../utils/logger.js"
import { downloadArquivos } from "../utils/metodoDownload.js"
import { getArquivos } from "./getArquivos.js"

// CONTROLLER PARA REALIZAR O DOWNLOAD DAS FILES
async function downloadDados() {

    const nomeArquivos = await getArquivos()

    try {
        for (let i = 0; i < nomeArquivos.length; i++) {

            const url = `https://challenges.coode.sh/food/data/json/${nomeArquivos[i]}`
            await downloadArquivos(url)

        }

    } catch (e) {
        logger.error(e)
    }

}


export { downloadDados }