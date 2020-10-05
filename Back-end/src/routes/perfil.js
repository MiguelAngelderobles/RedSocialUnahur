const express = require('express');
const router = express.Router();
const Perfil = require('../models/perfil');
const perfil = require('../models/perfil');



// router.get('/account/getAll', async (req, res) => {
//   const perfiles = await Perfil.find({user: req.user.id});
//   res.render('crearaccount', {
//     perfiles
//   });
// });

router.get('/perfil/', async (req, res, next) => {
  const perfiles = await Perfil.find(req.params.id)
  .then(perfiles =>{
    res.status(200)
    res.send(perfiles)})
  .catch(err=>{console.log(err)})
  
});

router.get('/perfil/:id', async (req, res, next) => {
  const perfiles = await Perfil.findById(req.params.id).populate(usuario)
  .then(perfiles =>{
    res.status(200)
    res.send(perfiles)})
  .catch(err=>{console.log(err)})
});





router.post('/perfil/add', async (req, res, next) => {
  console.log('POST /perfil/add')
  const perfiles = new Perfil(req.body)
  perfiles.nombre=req.body.nombre
  perfiles.carrera=req.body.carrera
  perfiles.cursandoActualmente=req.body.cursandoActualmente
  perfiles.preparandoFinales=req.body.preparandoFinales
  perfiles.usuario = req.usuario.id;//tengo a que usuario le pertenece el perfil creado recientemente
  await perfiles.save();
  console.log(perfiles)
});

router.get('/perfil/turn/:id', async (req, res, next) => {
  let { id } = req.params;
  const perfiles = await Perfil.findById(id).populate('usuario');
  perfiles.status = !perfiles.status;
  await perfiles.save();
  res.status(200)
  res.send(perfiles)
  .then(perfiles =>{
    res.status(200)
    res.send(perfiles)})
  .catch(err=>{console.log(err)})

});


router.get('/perfil/:id', async (req, res, next) => {
  const perfiles = await Perfil.findById(req.params.id).populate('usuario');
  console.log(perfiles)
  res.status(200)
  res.send(perfiles)

});

router.put('/perfil/update/:id', async (req, res, next) => {
  const { id } = req.params;
  await Perfil.update({_id: id}, req.body);
  res.status(200)
  res.send(perfiles)

});

// router.get('/account/:id', async (req, res, next) => {//en vez de miaccount cambiar por perfiles y asi con grupos tambien
//   const { id } = req.params;
//   await Perfil.update({_id: id}, req.body);
// });

//delete
router.delete('perfil/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Perfil.remove({_id: id}).populate('usuario');
  res.status(200)
  res.send(perfiles)
}); 
//cuenta/accion



module.exports = router;