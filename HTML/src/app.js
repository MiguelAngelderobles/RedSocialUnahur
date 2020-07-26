const express = require('express')
const app = express('')
const morgan = require('morgan')
const path = require('path')
const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost/cruds').then(db => console.log(`db mongo connected ${db}`)).catch(err => console.log(err))


const indexRouters = require('./routes/index')

app.set('port',process.env.PORT || 3000)
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')


app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))

app.use("/",indexRouters)

app.listen(app.get('port'),()=>{console.log(`Server connect port ${app.get('port')}`)})