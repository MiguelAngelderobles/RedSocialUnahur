const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const usuario = require('../service/userService');

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  
  const user = await usuario.getById(id);
  done(null, user);
});

passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
  
}, async (req, email, password, done) => {
  const user = await usuario.getEmail(email);
  if(user) {
    return done(null, false, req.flash('signupMessage', 'The Email is already Taken.'));
  } else {
    req.body.email = email;
    req.body.password = password;
    const newUser = await usuario.save(req.body);
    done(null, newUser);
  }
}));

passport.use('local-signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = await usuario.getEmail(email);
  if(!user) {
    return done(null, false, req.flash('signinMessage', 'No User Found'));
  }
  const userPass = await usuario.validPass({email: email, password: password});
  
  if(!userPass) {
    return done(null, false, req.flash('signinMessage', 'Incorrect Password'));
  }
  return done(null, user);
}));