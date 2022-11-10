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
            info: conexao,
            memory: {
                total: process.memoryUsage().heapTotal,
                usada: process.memoryUsage().heapUsed
            },
            cron: {
                nome: item.job_name,
                horario: horario
            }

        })
    } catch (e) {
        logger.error(e)
    }

}

export { status }