const express = require('express');
const router = express.Router();
const Grupo = require('../models/grupo');


router.post('/grupo/add', async (req, res, next) => {
    const grupos = new Grupo(req.body);
    await grupos.save();
    console.log(grupos)
    res.status(200)
    res.json(grupos)
  });
  
  router.get('/group/join', async (req, res, next) => {
    const grupos = await Grupo.find();
    res.status(200)
    res.json(grupos)    
  });

  router.post('/group/create', async (req, res, next) => {
    const grupos = await Grupo.find();
    res.status(200)
    res.json(grupos)
  });
  // grupo/accion
  router.get('/group', async (req, res, next) => {
    const grupos = await Grupo.find();
    res.status(200)
    res.json(grupos)
  });
  
  router.delete('/group/delete/:id', async (req, res, next) => {
    let { id } = req.params;
    await Grupo.remove({_id: id});
    res.status(200)
  });
  router.put('/group/delete/:id', async (req, res, next) => {
    const { id } = req.params;
    await Grupo.update({_id: id}, req.body);
    res.status(200)
    res.json(Grupo)
  });  
  


  module.exports = router;