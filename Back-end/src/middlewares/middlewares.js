const middlewareApp = async (app) => {
  const morgan = require('morgan')
  const passport = require('passport');
  const session = require('express-session');
  app.use(morgan('dev'))
  app.use(session({//guardar los datos de la password cuando inicia sesion
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
  }));
  app.use(flash());
  app.use(passport.initialize()); 
  app.use(passport.session());
};

module.exports = middlewareApp;
