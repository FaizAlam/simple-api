require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
  console.log("connected")
})

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers',subscribersRouter );
app.listen(3000,()=>console.log("server started"))