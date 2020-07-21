const createError = require('http-errors')
const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const cookieP = require('cookie-parser')
const path = require('path')


//importo routers 

const indexRouters = require('./routes/index')

//configuracion 

app.set('port',process.env.PORT || 3000)
app.set('views',path.join(__dirname,'/views'))
app.set('views engine','pug')


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
