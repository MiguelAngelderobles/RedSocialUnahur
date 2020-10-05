const express = require('express')
const app = express('')
const configApp = require('./configurations/config')
const middlewareApp = require('./middlewares/middlewares')

configApp(app)
middlewareApp(app)

require('./database/database');
require('./passport/local-auth');


app.use('/', require('./routes/index'));
app.use('/', require('./routes/perfil'));
app.use('/', require('./routes/grupo'));