const middlewareApp = async (app) => {
  const morgan = require('morgan')
  const passport = require('passport');
  const session = require('express-session');
  const flash = require('connect-flash')
  
  app.use(morgan('dev'))
  app.use(session({//guardar los datos de la password cuando inicia sesion
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
  }));
  app.use(flash());
  app.use(passport.initialize()); 
  app.use(passport.session());
 
  app.use(express.static(__dirname + '/public'));
  app.use(express.static("src/views/img"));

  app.use((req, res, next) => {
    app.locals.signinMessage = req.flash('signinMessage'); //toma los mensaje si existen y los guardara
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.user = req.user;//tenemos disponible un usario para hacer llamadas en caso de ser necesario
    console.log(app.locals)
    next();//para que continue con el resto de las rutas, si no estuviera queda estancado en el login
  });
};

module.exports = middlewareApp;
