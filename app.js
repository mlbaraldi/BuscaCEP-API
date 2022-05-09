import express from "express"
import db from "./src/database/connectDB.js"
import routes from "./src/routes/routes.js"

//connecting DB
db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
    console.log('Conexão com banco feita com sucesso')
})

const app = express()
app.use(express.json(), routes)

export default app