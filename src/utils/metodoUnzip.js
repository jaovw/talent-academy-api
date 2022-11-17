import fs from "fs"
import zlib from "zlib"
import path from "path"

// METODO PARA UNZIP DOS ARQUIVOS

async function unzipArquivos(nome) {

    const filename = path.basename(nome)

    let inStream = fs.createReadStream(`./src/files/${filename}`)

    let outStream = fs.createWriteStream(`./src/files/${filename.slice(0,-8)}.txt`)

    let unzip = zlib.createGunzip()

    return inStream.pipe(unzip).pipe(outStream)
     
}

export { unzipArquivos }