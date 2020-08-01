const express = require('express')
const router = require('express').Router();
const passport = require('passport');





router.get('/', (req, res, next) => {
  res.render('signin');
});

router.get('/signin', (req, res, next) => {
  res.render('signin');
});

router.get('/signup', (req, res, next) => {
  res.render('signup');
});

router.get('/Bienvenida', (req, res, next) => {
  res.render('Bienvenida');
});

router.post('/CrearCuenta', passport.authenticate('local-signup', {
  successRedirect: '/verPerfil',
  failureRedirect: '/verPerfil',
  passReqToCallback: true
}));

router.post('/signin', passport.authenticate('local-signin', {
  successRedirect: '/Bienvenida',
  failureRedirect: '/signin',
  passReqToCallback: true
}));

router.get('/Bienvenida',isAuthenticated, (req, res, next) => {
  res.render('Bienvenida');
});



router.post('/Bienvenida', passport.authenticate('local-signin', {
  successRedirect: '/verPerfil',
  failureRedirect: '/Bienvenida',
  passReqToCallback: true
}));

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});


function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }

  res.redirect('/')
}

router.get('/olvidoContrasenia', (req, res, next) => {
  res.render('olvidoContrasenia');
});

router.get('/CrearCuenta', (req, res, next) => {
  res.render('CrearCuenta');
});

router.get('/img', function(req, res,next){
  res.render( `public/${img}` );
}); 

router.get('/crearGrupo', (req, res, next) => {
  res.render('crearGrupo');
});

router.get('/chatGrupo', (req, res, next) => {
  res.render('chatGrupo');
});




router.get('/editarGrupo', (req, res, next) => {
  res.render('editarGrupo');
});

router.get('/chat', (req, res, next) => {
  res.render('chat');
});

router.get('/alumnosTutor', (req, res, next) => {
  res.render('alumnosTutor');
});

router.get('/verPerfil', (req, res, next) => {
  res.render('verPerfil');
});


router.get('/Grupo', (req, res, next) => {
  res.render('Grupo');
});

router.get('/editarPerfil', (req, res, next) => {
  res.render('editarPerfil');
});

router.get('/verGrupos', (req, res, next) => {
  res.render('verGrupos');
});

router.get('/solicitudesTutor', (req, res, next) => {
  res.render('solicitudesTutor');
});

router.get('/solicitudesGrupo', (req, res, next) => {
  res.render('solicitudesGrupo');
});

router.get('/unirseGrupo', (req, res, next) => {
  res.render('unirseGrupo');
});

router.get('/perfilTutor', (req, res, next) => {
  res.render('perfilTutor');
});


module.exports = router;
