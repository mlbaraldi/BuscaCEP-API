import express from "express"
import buscaCepController from "../controller/buscaCepController.js"

const routes = express.Router()

routes
  .get('/', (req, res) => {res.status(200).send("Bem vindo à buscaCEP, entre no endpoint /buscacep para iniciar a busca.")})
  .post('/buscacep', buscaCepController.buscaCep)


export default routes