const express = require('express');
const router = express.Router();
const controllerProfile = require("../../controller/profile.controller")
const bodyParser=require('body-parser');

router.use(bodyParser.urlencoded({extend:true}))

router.use(bodyParser.json())

router.get('/', controllerProfile.getAll);

router.get('/:id', controllerProfile.getById);

router.post('/', controllerProfile.post);

router.put('/:id', controllerProfile.put);

router.delete('/:id', controllerProfile.delete); 

module.exports = router;

/* router.get('/perfil/turn/:id', async (req, res, next) => {
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

}); */

// router.get('/account/getAll', async (req, res) => {
//   const perfiles = await Perfil.find({user: req.user.id});
//   res.render('crearaccount', {
//     perfiles
//   });
// });
