import { schedule } from "node-cron"
import { logger } from "./src/utils/logger.js"
import { downloadDados } from "./src/controllers/downloadDados.js"
import { transformaDados } from "./src/controllers/tranformaDados.js"
import model from "./src/models/job.js"
import { dbConnect } from "./src/db/connection.js"

async function jobDownload() {

    return schedule('43 15 * * *', async () => {

        const time = new Date().getTime()

        const param = {
            job_name: 'Download',
            ran: true,
            run_t: time
        }

        try {

            await dbConnect()

            let run = await downloadDados()

            if (run !== true) {
                await model.create({
                    job_name: 'Download',
                    ran: false,
                    run_t: time
                })
                return
            }
            await model.create(param)

            logger.info('job 1 rodou')

        } catch (e) {
            logger.error(e)
        }

    })

}

async function jobTratamento() {

    return schedule('44 15 * * *', async () => {

        const time = new Date().getTime()

        const param = {
            job_name: 'Tratamento',
            ran: true,
            run_t: time
        }

        try {

            await dbConnect()

            let run = await transformaDados()

            if (run !== true) {
                await model.create({
                    job_name: 'Tratamento',
                    ran: false,
                    run_t: time
                })
                return
            }
            await model.create(param)

            logger.info('job 2 rodou')

        } catch (e) {
            logger.error(e)
        }

    })
}

export { jobDownload, jobTratamento }
