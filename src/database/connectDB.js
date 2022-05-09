import mongoose from "mongoose"
import config from "../config/config.js"


connect().catch(err => console.log(err))

async function connect() {
    await mongoose.connect(config.dbConnect)
}

let db = mongoose.connection

export default db