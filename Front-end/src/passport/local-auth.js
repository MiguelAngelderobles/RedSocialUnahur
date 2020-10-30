const { response } = require('express');
const { replaceOne } = require('../../../HTML/src/models/usuario');

const usePassPort = () => {
  const axios = require('axios')
  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;
  const urlBackEnd = "http://localhost:7000/"
  const bcrypt =require('bcrypt-nodejs')
  
  const encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));//hash de la password
  };
  
  const comparePassword= function (password) {
    return bcrypt.compareSync(password, this.password); //si contraseñas coinciden va a retornar un true, caso contrario un false
  };
 
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
  });

  //para registrarse
  //lo que hace passport es poder navegar entre diferentes vistas y no tener que registrarnos en todo momento, sino que guarda dichos datos
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, email, password, done) => {
    const user =  axios({method:'get',url:'http://localhost:7000/usuario/:email?',data:{email}})
    if(user) {
      return done(null, false, req.flash('signupMessage', 'El Email ingresado ya existe.'));
    } else {
      // newUser.email = email;
      // newUser.password = newUser.encryptPassword(password);
      password.encryptPassword()
       const newUser = axios({method:'get',url:'http://localhost:7000/usuario/:email?',data:{email,password}})
         done(null,newUser)        
  }}));

//para iniciar sesión
  passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, email, password, done) => {
    // const user = await User.findOne({email: email});
    const user = await axios({method:'get',url:'http://localhost:7000/usuario/:email?',data:email})
    if(!user) {
      return done(null, false, req.flash('signinMessage', 'Usuario no encontrado'));
    }
    if(!user.comparePassword(password)) {
      return done(null, false, req.flash('signinMessage', 'Contraseña incorrecta'));
    }
    return done(null, user, req.flash('Cuenta registrada satisfactoriamente'));
  }));
}

module.exports = usePassPort

// axios.get(urlBackEnd +'http://localhost:7000/usuario/:email?',email)
//     .then(function(response){
//  //hash de la password
//     })