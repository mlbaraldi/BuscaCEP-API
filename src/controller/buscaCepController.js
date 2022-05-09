import requisition from "../model/requisition.js"
import sqs from "../config/sqs.js"
import config from "../config/config.js"

class buscaCepController {

    static buscaCep = (req, res) => {
        //fazer validação do campo CEP
        let requi = new requisition(req.body)
        requi.save((err) => {
            if(err) {
                return res.status(500).send({message: `${err.message}`})
            }
            res.status(201).send(requi.toJSON())

        })
        let params = {
            DelaySeconds: 1,
            QueueUrl: config.sqsQueue,
            MessageBody: requi.toString()

        }
        sqs.sendMessage(params, (err, data) => {
            if (err) {
                return console.log("Error", err)
            }
            console.log("Requisition sent to: ", data.MessageId)
        })

    }

}

export default buscaCepController

