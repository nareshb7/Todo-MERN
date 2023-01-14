const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5050
const routes = require('./routers/TodoRouters')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.set('strictQuery', true)
mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log(`MongoDB is Connected`))
.catch((err)=> console.log(`Error : ${err}`))

app.use('/',routes)

app.listen(port, ()=> console.log(`Server is running on ${port}`))