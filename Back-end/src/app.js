const express = require('express')
const app = express('')
const configApp = require('./configurations/config')
const middlewareApp = require('./middlewares/middlewares')
const updatabase = require('./database/database')

configApp(app)
updatabase()
middlewareApp(app)
require('./passport/local-auth');


app.use('/', require('./routes/index'));
app.use('/', require('./routes/perfil'));
app.use('/', require('./routes/grupo'));