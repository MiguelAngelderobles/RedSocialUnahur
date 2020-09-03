const express = require('express');
const router = express.Router();
const Perfil = require('../models/crearPerfil');

/*agregado*/

/*
router.get('/verperfil/:id', async (req, res, next) => {
  const perfiles = await Perfil.find();
  res.render('verperfil', {
    perfiles });
});

router.post('/verperfil/:id', async (req, res, next) => {
  const { id } = req.params;
  await Perfil.update({_id: id}, req.body);
  res.redirect('/index');
});
*/


/*agregador*/

/*
router.get('/index', async (req, res) => {
  const perfiles = await Perfil.find();
  res.render('index', {
    perfiles
  });
});
*/
router.get('/Bienvenida', async (req, res) => {
  const perfiles = await Perfil.find({user: req.user.id});
  res.render('Bienvenida', {
    perfiles
  });
});

router.get('/crearaccount', async (req, res) => {
  const perfiles = await Perfil.find({user: req.user.id});
  res.render('crearaccount', {
    perfiles
  });
});

router.get('/miaccount', async (req, res, next) => {
  const perfiles = await Perfil.find({user: req.user.id});
  res.render('miaccount', {
    perfiles
  });
});

router.post('/add', async (req, res, next) => {
  const perfiles = new Perfil(req.body);
  perfiles.user = req.user.id;//tengo a que usuario le pertenece el perfil creado recientemente
  await perfiles.save();
  console.log(perfiles)
  res.redirect('/miaccount');
});


router.get('/turn/:id', async (req, res, next) => {
  let { id } = req.params;
  const perfiles = await Perfil.findById(id);
  perfiles.status = !perfiles.status;
  await perfiles.save();
  res.redirect('/crearaccount');
});


router.get('/edit/:id', async (req, res, next) => {
  const perfiles = await Perfil.findById(req.params.id);
  console.log(perfiles)
  res.render('edit', { perfiles });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Perfil.update({_id: id}, req.body);
  res.redirect('/miaccount');
});

router.post('/miaccount/:id', async (req, res, next) => {
  const { id } = req.params;
  await Perfil.update({_id: id}, req.body);
  res.redirect('/edit');
});

router.get('/miaccount/:id', async (req, res, next) => {
  const perfiles = await Perfil.findById(req.params.id);
  console.log(perfiles)
  res.render('miaccount', { perfiles });
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Perfil.remove({_id: id});
  res.redirect('/miaccount');
});




module.exports = router;