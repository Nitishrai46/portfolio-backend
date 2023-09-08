const express= require('express')
const MailRouter = express.Router()

const bodyParser = require('body-parser')
const { sendMail } = require('../controller/sendMail')
const jsonParser = bodyParser.json()


MailRouter.post('/send-mail', jsonParser, sendMail)

module.exports =MailRouter