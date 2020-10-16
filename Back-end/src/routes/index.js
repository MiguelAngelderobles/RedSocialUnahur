const router = require('express').Router();
const passport = require('passport');


router.post('/signin', passport.authenticate('local-signin', {
   
  successRedirect: '/Bienvenida',
  
  failureRedirect: '/signin',
  
  failureFlash: true
}));

router.post('/signup', passport.authenticate('local-signup', {
   
  successRedirect: '/signin',
  
  failureRedirect: '/signup',
  
  failureFlash: true
}));


router.get('/logout', (req, res, next) => {//para cerrar la sesión
  req.logout();
  res.redirect('/');//lo devuelvo a la pagina principal de mi aplicacion
});


function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }

  res.redirect('/')
}


module.exports = router;
