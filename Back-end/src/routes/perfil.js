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

router.get('/perfil/', async (req, res, next) => {
  const perfiles = await Perfil.find(req.params.id)
  .then(perfiles =>{
    res.status(200)
    res.send(perfiles)})
  .catch(err=>{console.log(err)})
  
});

router.get('/perfil/:id', async (req, res, next) => {
  const perfiles = await Perfil.findById(req.params.id).populate('usuario')
  .then(perfiles =>{
    res.status(200)
    res.send(perfiles)})
  .catch(err=>{console.log(err)})
});

router.post('/perfil/add', async (req, res, next) => {
  console.log('POST /perfil/add')
  const perfiles = new Perfil(req.body)
  await perfiles.save()
  .then(perfiles =>{
    console.log(perfiles)
    res.status(200)
    res.send(perfiles)})
  .catch(err=>{console.log(err)})
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
  await Perfil.deleteOne({_id: id});
  res.status(200)
}); 
//cuenta/accion



module.exports = router;