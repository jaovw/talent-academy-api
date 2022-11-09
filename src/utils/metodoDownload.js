import fs from "fs"
import https from "https"
import path from "path"
import { logger } from "./logger.js"

// METODO PARA REAALIZAR O DOWNLOAD DOS ARQUIVOS NO ENDPOINT
async function downloadFile(url) {

    const filename = path.basename(url)

    const req = https.get(url, (res) => {
        const fileStream = fs.createWriteStream(`./src/files/zip/${filename}`)
        res.pipe(fileStream)

        fileStream.on('finish', () => {
            fileStream.close()
            logger.info(`Download ${filename} feito!`)
        })
    })

    return req
}

export { downloadFile }