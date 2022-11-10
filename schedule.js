import { schedule } from "node-cron"
import { logger } from "./src/utils/logger.js"
import { downloadDados } from "./src/controllers/downloadDados.js"
import { transformaDados } from "./src/controllers/tranformaDados.js"

async function jobDownload() {

    return schedule('00 21 * * *', async () => {
        await downloadDados()
        logger.info('job 1 rodou')

    })
}

function jobTratamento() {

    return schedule('00 21 * * *', async () => {
        await transformaDados()
        logger.info('job 2 rodou')

    })
}

export { jobDownload, jobTratamento }
