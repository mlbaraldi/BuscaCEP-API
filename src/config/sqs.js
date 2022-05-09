import  aws from "aws-sdk"
import config from "./config.js"

aws.config.update({
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
  region: config.region
})

const sqs = new aws.SQS({apiVersion: '2022-09-05'})

export default sqs