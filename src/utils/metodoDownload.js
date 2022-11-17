import fs from "fs"
import https from "https"
import path from "path"
import { logger } from "./logger.js"

// METODO PARA REAALIZAR O DOWNLOAD DOS ARQUIVOS NO ENDPOINT
async function downloadArquivos(url) {

    const filename = path.basename(url)

    const req = https.get(url, (res) => {
        const fileStream = fs.createWriteStream(`./src/files/${filename}`)
        res.pipe(fileStream)

        fileStream.on('finish', () => {
            fileStream.close()
            logger.info(`Download ${filename} feito!`)
        })
    })

    return req
}

export { downloadArquivos }