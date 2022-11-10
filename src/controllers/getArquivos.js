import { getUrl } from "../utils/getUrl.js"
import { logger } from "../utils/logger.js"

// CONTROLLER PARA TRANFORMAR A RESPOSTA DO ENDPOINT COM O NOME DOS ARQUIVOS
// JOGANDO EM UM ARRAY PARA ITERAR POSTERIORMENTE
async function getArquivos() {

    let arquivosPadrao = []
    const nomes = await getUrl()
    
    try {
        
        const nomeArquivo1 = nomes.slice(0,19)
        const nomeArquivo2 = nomes.slice(20, 39)
        const nomeArquivo3 = nomes.slice(40,59)
        const nomeArquivo4 = nomes.slice(60,79)
        const nomeArquivo5 = nomes.slice(80,99)
        const nomeArquivo6 = nomes.slice(100,119)
        const nomeArquivo7 = nomes.slice(120,139)
        const nomeArquivo8 = nomes.slice(140,159)
        const nomeArquivo9 = nomes.slice(160,179)

        arquivosPadrao
        .push(
            nomeArquivo1, 
            nomeArquivo2, 
            nomeArquivo3, 
            nomeArquivo4,
            nomeArquivo5,
            nomeArquivo6,
            nomeArquivo7,
            nomeArquivo8,
            nomeArquivo9
        )

        return arquivosPadrao
    } catch (e) {
        logger.error(e)
    }

}

export { getArquivos }