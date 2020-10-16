const express = require('express')
const app = express('')
const middlewareApp = require('./middleware/middleware')
const configurApp = require('./configuration/config')

configurApp(app)
middlewareApp(app,express)


require('./configuration/config')
require('./middleware/middleware')

app.use('/', require('../src/routes/index'));






// const mongoose= require('mongoose')
// const flash = require('connect-flash');
// const session = require('express-session');

// app.use(session({//guardar los datos de la password cuando inicia sesion
//     secret: 'mysecretsession',
//     resave: false,
//     saveUninitialized: false
//   }));
//   app.use(flash());
//   app.use(passport.initialize());
//   app.use(passport.session());


  // app.use((req, res, next) => {
  //   app.locals.signinMessage = req.flash('signinMessage'); //toma los mensaje si existen y los guardara
  //   app.locals.signupMessage = req.flash('signupMessage');
  //   app.locals.user = req.user;//tenemos disponible un usario para hacer llamadas en caso de ser necesario
  //   console.log(app.locals)
  //   next();//para que continue con el resto de las rutas, si no estuviera queda estancado en el login
  // }); 


  
// routes
// app.use('/', require('../src/routes/crearuser'));
// app.use('/', require('../src/routes/creargrupo'));

// Starting the server