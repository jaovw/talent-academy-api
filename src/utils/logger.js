import pino from "pino"

const logger = pino({

    anabled: true,
    level: 'info'
})

export { logger } 