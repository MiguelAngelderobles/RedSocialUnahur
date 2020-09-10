const express = require('express');
const router = express.Router();
const Perfil = require('../models/crearPerfil');
const bodyParser=require('body-parser');

router.use(bodyParser.urlencoded({extend:true}))
router.use(bodyParser.json())



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

router.get('/miaccount/:id', async (req, res, next) => {
  const perfiles = await Perfil.findById(req.params.id);
  console.log(perfiles)
  res.render('miaccount', { perfiles });
});





router.post('/add', async (req, res, next) => {
  const perfiles = new Perfil(req.body)
  perfiles.user = req.user.id
  perfiles.nombre=req.body.nombre
  perfiles.carrera=req.body.carrera
  perfiles.cursandoActualmente=req.body.cursandoActualmente
  perfiles.preparandoFinales=req.body.preparandoFinales
  
 
  console.log('POST /perfil/add')
  console.log(req.body)
  await perfiles.save();
  
  res.redirect('/miaccount');

 /* const perfiles = new Perfil(req.body);
  perfiles.user = req.user.id;//tengo a que usuario le pertenece el perfil creado recientemente
  await perfiles.save();
  console.log(perfiles)
  res.redirect('/perfil/miaccount');*/
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
  res.redirect('/Bienvenida');
});

router.get('/miaccount/:id', async (req, res, next) => {//en vez de miaccount cambiar por perfiles y asi con grupos tambien
  const { id } = req.params;
  await Perfil.update({_id: id}, req.body);
  res.redirect('/edit');
});


//delete
router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Perfil.remove({_id: id});
  res.redirect('/Bienvenida');
}); 




module.exports = router;