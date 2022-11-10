import { dbConnect } from "../db/connection.js"
import model from "../models/job.js"
import { logger } from "../utils/logger.js"

async function status(req, res) {
    try {
        const con = await dbConnect()
        const item = await model.findOne().sort({run_t: 1})

        return res.status(200).json({

            message: 'Aplicacao online ...',
            info: con,
            memory: {
                total: process.memoryUsage().heapTotal,
                usada: process.memoryUsage().heapUsed
            },
            cron: {
                Job: item.job_name,
                horario: item.run_t
            }

        })
    } catch (e) {
        logger.error(e)
    }

}

export { status }