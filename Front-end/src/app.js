const express = require('express')
const app = express('')
const middlewareApp = require('./middleware/middleware')
const configurApp = require('./configuration/config')

configurApp(app)
middlewareApp(app,express)

app.use('/', require('./routes/index'));

// app.use('/', require('../src/routes/crearuser'));
// app.use('/', require('../src/routes/creargrupo'));

// Starting the server