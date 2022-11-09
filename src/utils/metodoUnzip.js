import fs from "fs"
import zlib from "zlib"
import path from "path"

// METODO PARA UNZIP DOS ARQUIVOS

async function unzipArquivos(nome) {

    const filename = path.basename(nome)

    let inStream = fs.createReadStream(`./src/files/zip/${filename}`)

    let outStream = fs.createWriteStream(`./src/files/unzip/${filename.slice(0,16)}`)

    let unzip = zlib.createGunzip()

    return inStream.pipe(unzip).pipe(outStream)
}

export { unzipArquivos }