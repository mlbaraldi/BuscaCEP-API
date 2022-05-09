import mongoose from "mongoose"

const reqSchema = new mongoose.Schema(
    {
        cep: {type: String, required: true},
        status: {type: String, default: "Pendente"}
    },
    {
        versionKey: false
    }
)

const requisition = mongoose.model('requisition', reqSchema)

export default requisition