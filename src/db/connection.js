import mongoose from "mongoose";
import { logger } from '../utils/logger.js'
import * as dotenv from 'dotenv'

dotenv.config()

async function dbConnect() {

    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@talentacademyapi.9wp5ynr.mongodb.net/?retryWrites=true&w=majority`
        )

        logger.info('Conexao bem sucedida!')

        return 'Conexao com a base de dados bem sucedida!'
        
    } catch (e) {
        logger.error(e)
    }
}

export { dbConnect }