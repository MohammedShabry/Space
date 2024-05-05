const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const {mongoose} = require('mongoose')
const cookieParser = require('cookie-parser')

const app = express()

//database connection
mongoose.connect('mongodb+srv://shabry:shabry@mydb.t4wv3xl.mongodb.net/NASA')
.then(()=> console.log("database connected"))
.catch((err)=> console.log("database not connected" , err))

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))


app.use('/' , require('./routes/authRoutes'))



