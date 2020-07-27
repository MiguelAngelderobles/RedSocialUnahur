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

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/Bienvenida',
  failureRedirect: '/signup',
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

router.get('/verPerfil', (req, res, next) => {
  res.render('verPerfil');
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

module.exports = router;