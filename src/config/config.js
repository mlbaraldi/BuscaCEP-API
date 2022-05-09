import dotenv from "dotenv"

dotenv.config()

const port = process.env.PORT
const dbConnect = process.env.DBCONNECT
const accessKeyId = process.env.ACCESSKEYID
const secretAccessKey = process.env.SECRETACCESSKEY
const region = process.env.REGION
const sqsQueue = process.env.SQSQUEUE

export default { dbConnect, port, accessKeyId, secretAccessKey, region, sqsQueue }