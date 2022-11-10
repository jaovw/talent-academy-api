import { dbConnect } from "../db/connection.js"

async function status(req, res) {

    res.status(200).json({
        message:'Hello World',
        info: await dbConnect(),
        Memoria: {
            total: process.memoryUsage().heapTotal,
            usada: process.memoryUsage().heapUsed
        }
    })
}

export { status }