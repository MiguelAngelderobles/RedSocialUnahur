const express = require('express');
const router = express.Router();
const Perfil = require('../models/perfil');
const bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extend:true}))
router.use(bodyParser.json())



// router.get('/account/getAll', async (req, res) => {
//   const perfiles = await Perfil.find({user: req.user.id});
//   res.render('crearaccount', {
//     perfiles
//   });
// });

router.get('/account/', async (req, res, next) => {
  const perfiles = await Perfil.find(req.usuario.id);
  res.status(200)
  res.send(perfiles)
});

router.get('/miaccount/:id', async (req, res, next) => {
  const perfiles = await Perfil.findById(req.params.id).populate(usuario);
  console.log(perfiles)
  res.status(200)
  res.send(perfiles)
});





router.post('/account/add', async (req, res, next) => {
  const perfiles = new Perfil(req.body)
  perfiles.nombre=req.body.nombre
  perfiles.carrera=req.body.carrera
  perfiles.cursandoActualmente=req.body.cursandoActualmente
  perfiles.preparandoFinales=req.body.preparandoFinales
  perfiles.usuario = req.usuario.id

 
  console.log('POST /perfil/add')
  console.log(req.body)
  await perfiles.save();
  
 /* const perfiles = new Perfil(req.body);
  perfiles.user = req.user.id;//tengo a que usuario le pertenece el perfil creado recientemente
  await perfiles.save();
  console.log(perfiles)
  res.redirect('/perfil/miaccount');*/
});

router.get('/account/turn/:id', async (req, res, next) => {
  let { id } = req.params;
  const perfiles = await Perfil.findById(id).populate(usuario);
  perfiles.status = !perfiles.status;
  await perfiles.save();
  res.status(200)
});


router.get('/account/:id', async (req, res, next) => {
  const perfiles = await Perfil.findById(req.params.id).populate(usuario);
  console.log(perfiles)
  res.status(200)
  res.send(perfiles)

});

router.put('/account/edit/:id', async (req, res, next) => {
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
router.delete('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Perfil.remove({_id: id});
  res.status(200)
  res.send(perfiles)
}); 
//cuenta/accion



module.exports = router;