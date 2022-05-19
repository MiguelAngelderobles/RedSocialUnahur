const router = require('express').Router();
const Usuario = require('../../models/user');

router.post('/usuario/add', async (req, res, next) => {
  const usuario = new Usuario(req.body);
  await usuario.save();
  console.log(usuario)
  res.status(200)
  res.send(usuario)
});

router.get('/usuario/', async (req, res, next) => {
  const usuario = await Usuario.find();
  res.status(200)
  res.send(usuario)    
});


router.get('/usuario/:email?', async (req, res, next) => {
  const usuario = await Usuario.findOne({email: req.body.email});
  res.status(200)
  res.send(usuario)    
});

module.exports = router;
