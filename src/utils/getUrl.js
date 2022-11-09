import axios from "axios"
import { logger } from "./logger.js"

//  METODO PARA RETORNAR OS NOMES DOS ARQUIVOS DISPONIVEIS PARA BUSCA NO ENDPOINT
async function getUrl() {

    try {
        const { data, status } = await axios.get(
            `https://challenges.coode.sh/food/data/json/index.txt`,
            {
                headers: {
                    Accept: 'aplication/json'
                }
            }
        )
        logger.info(data)

        return data

    } catch (e) {
        logger.error(e)
    }
}

export { getUrl }