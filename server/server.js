const express = require('express')
const morgan =require('morgan')
const Mongoose = require('mongoose')
const dotenv = require('dotenv')


dotenv.config()

const app = express()
Mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true,useUnifiedTopology: true }, err => {
    if (err) {
       console.log(err)
    }
    else {
        console.log('Connect to database')
    }
})

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//request api
const userRoute=require('./routes/user')

app.use('/api',userRoute)



app.listen(3000, err => {
    console.log('listening on port ', 3000)
})