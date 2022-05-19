const { response } = require('express');
const { replaceOne } = require('../../../HTML/src/models/usuario');
const urlBackEnd = "http://localhost:8000/"
const urlBackEndPerfil = urlBackEnd + '/perfil/'

const usePassPort = () => {
  const axios = require('axios')
  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;
  const bcrypt =require('bcrypt-nodejs')
  
  const encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));//hash de la password
  };
  
  const comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password); //si contraseñas coinciden va a retornar un true, caso contrario un false
  };
 
  passport.serializeUser((user, done) => {
    let user1 =  axios.get(urlBackEnd + "/usuario/")
    done(null, user1);
  });

  passport.deserializeUser(async (id, done) => {
    let user2 = axios.get(urlBackEndPerfil + ":id" + id)
    done(null, user2);
  });

  //para registrarse
  //lo que hace passport es poder navegar entre diferentes vistas y no tener que registrarnos en todo momento, sino que guarda dichos datos
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, email, password, done) => {
    const user =  axios({method:'get',url:'http://localhost:8000/usuario/:email?',data:{email}})
    if(user.email === email) {
      return done(null, false, req.flash('signupMessage', 'El Email ingresado ya existe.'));
    } else {
      // newUser.email = email;
      // newUser.password = newUser.encryptPassword(password);
      var newPasswordEncript = encryptPassword(password);
       const newUser = axios({method:'get',url:'http://localhost:8000/usuario/:email?',data:{email,newPasswordEncript}})
         done(null,newUser)        
  }}));

//para iniciar sesión
  passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, email, password, done) => {
    // const user = await User.findOne({email: email});
    const user = await axios({method:'get',url:'http://localhost:8000/usuario/:email?',data:email})
    if(!user.email) {
      return done(null, false, req.flash('signinMessage', 'Usuario no encontrado'));
    }
    var newPasswordEncript = encryptPassword(user.password);
 
    if(!newPasswordEncript) {
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