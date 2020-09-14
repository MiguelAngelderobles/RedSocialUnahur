const express = require('express')
const app = express('')
const morgan = require('morgan')
const path = require('path')
const mongoose= require('mongoose')
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const engine = require('ejs-mate');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { format } = require('timeago.js');

mongoose.connect('mongodb://localhost/cruds').then(db => console.log(`db mongo connected ${db}`)).catch(err => console.log(err))


// initializations

require('./database');
require('./passport/local-auth');


// settings
app.set('port',process.env.PORT || 3000)
app.set('views',path.join(__dirname,'views'))
app.engine('ejs', engine);
app.set('view engine','ejs')

// middlewares
app.use(morgan('dev'))
app.use(express.static("img"))
app.use(express.urlencoded({extended:true}))
app.use(express.json());//revisar
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


//images
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename) => {
        console.log(file);
        cb(null, { v4: uuidv4 } + path.extname(file.originalname));
    }
}) 
app.use(multer({storage}).single('image'));

// Global variables
app.use((req, res, next) => {
  app.locals.format = format;
  next();
});

// static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/crearuser'));
app.use('/', require('./routes/creargrupo'));


// Starting the server
app.listen(app.get('port'),()=>
{console.log(`Server connect port ${app.get('port')}`)})