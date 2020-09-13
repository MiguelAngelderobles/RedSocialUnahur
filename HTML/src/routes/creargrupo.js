const express = require('express');
const router = express.Router();
const Grupo = require('../models/crearGrupo');


router.post('/addgrupo', async (req, res, next) => {
    const grupos = new Grupo(req.body);
    await grupos.save();
    console.log(grupos)
    res.redirect('/unirsegroup');
  });
  
  router.get('/unirsegroup', async (req, res, next) => {
    const grupos = await Grupo.find();
    res.render('unirsegroup', {
        grupos
    });
  });

  router.get('/creargroup', async (req, res, next) => {
    const grupos = await Grupo.find();
    res.render('creargroup', {
        grupos
    });
  });

  router.get('/vergroup', async (req, res, next) => {
    const grupos = await Grupo.find();
    res.render('vergroup', {
        grupos
    });
  });
  
  router.get('/deletegroup/:id', async (req, res, next) => {
    let { id } = req.params;
    await Grupo.remove({_id: id});
    res.redirect('/Grupo');
  }); 



  module.exports = router;