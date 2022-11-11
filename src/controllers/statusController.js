import { dbConnect } from "../db/connection.js"
import model from "../models/job.js"
import { logger } from "../utils/logger.js"

async function status(req, res) {
    try {
        const conexao = await dbConnect()
        const item = await model.findOne().sort({ run_t: -1 })
        const horario = new Date(item.run_t).toLocaleString("pt-BR", { timeZone: 'America/Sao_Paulo' })

        return res.status(200).json({

            message: 'Aplicacao online ...',
            dataBase: conexao,
            memory: {
                total: process.memoryUsage().heapTotal,
                used: process.memoryUsage().heapUsed
            },
            cron: {
                name: item.job_name,
                time: horario
            }

        })
    } catch (e) {
        logger.error(e)
    }

}

export { status }