const engine = require('ejs-mate');
const path = require('path')
const express = require('express')
const app = express('')

app.set('../views',path.join(__dirname,'views'))
app.engine('ejs', engine);
app.set('view engine','ejs')

app.set('port',process.env.PORT || 8000)
app.listen(app.get('port'),()=>
{console.log(`Server connect port ${app.get('port')}`)})
