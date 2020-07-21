const createError = require('http-errors')
const express = require('express');
const app = express();
const morgan = require('morgan')
// const cors = require('cors')
const cookieP = require('cookie-parser')
const path = require('path')
const mongoose = require('mongoose')

const indexRouters = require('./routes/index.js')

const url = ''

// conecto base de da
mongoose.connect('mongodb://localhost:27017/DBRedSocial')
    .then(db => console.log('db connected'))
    .catch(err => console.log('db no connect'));


//configuracion 

app.set('port',process.env.PORT || 4000)
app.set('views',path.join(__dirname,'/views'))
app.set('views engine','pugs')


//cortafuegos posiblemente no uso 

app.use(morgan('dev'))
app.use(express.json)
app.use(express.urlencoded({extended: false}))
app.use(cookieP());

//routes

app.use('/',indexRouters)

app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
})  


module.exports = app;