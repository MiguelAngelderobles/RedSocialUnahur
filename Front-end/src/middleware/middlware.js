

const middleware = async (app,express) =>{
    const express = require('express')
    const app = express('')
    const morgan = require('morgan')
    
    app.use(morgan('dev'))
    app.use(express.static("img"))
    app.use(express.urlencoded({extended:true}))
    app.use(express.json());//revisar
    app.use(express.static(__dirname + '/public'));
    app.use(express.static("src/views/img"));
    app.use((req, res, next) => {
        app.locals.signinMessage = req.flash('signinMessage'); //toma los mensaje si existen y los guardara
        app.locals.signupMessage = req.flash('signupMessage');
        app.locals.user = req.user;//tenemos disponible un usario para hacer llamadas en caso de ser necesario
        console.log(app.locals)
        next();//para que continue con el resto de las rutas, si no estuviera queda estancado en el login
    })
};