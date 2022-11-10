import mongoose, { Schema } from "mongoose"

const jobSchema = new Schema({

    job_name: {
        type: String,
        required: true
    },
    ran: {
        type: Boolean,
        required: true,
    },
    run_t: {
        type: Number,
        required: true
    }
})

const model = mongoose.model('Job', jobSchema)

export const schema = model.schema

export default model