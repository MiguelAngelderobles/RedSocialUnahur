const express = require('express')
const app = express('')
const path = require('path')
const engine = require('ejs-mate');

app.set('port',process.env.PORT || 3000)
app.listen(app.get('port'),()=>
{console.log(`Server connect port ${app.get('port')}`)})


app.set('./views',path.join(__dirname,'./views'))
app.engine('ejs', engine);
app.set('view engine','ejs')
