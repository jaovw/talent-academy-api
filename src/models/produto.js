import mongoose, { Schema } from "mongoose"

const produtoSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'draft'
    },
    imported_t: {
        type: String,
        required: true
    }
})

const model = mongoose.model('Produto', produtoSchema)

export const schema = model.schema

export default model