const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const cors = require('cors')
const MailRouter = require('../route/mail')
require('dotenv').config()

const PORT = process.env.PORT || 4000


app.use(bodyparser.urlencoded({extended:true}))

app.use(cors())

app.use('', MailRouter)

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})
