const express = require('express');
const router = express.Router();
const Grupo = require('../models/crearGrupo');
const Perfil = require('../models/crearPerfil');
const Usuario = require('../models/usuario');




router.post('/addgrupo', async (req, res, next) => {
    const grupos = new Grupo(req.body);
    grupos.user = req.user.id
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
    const grupos = await Grupo.find({user: req.user.id});
    res.render('creargroup', {
        grupos
    });
  });

  router.get('/vergroup', async (req, res, next) => {
    const grupos = await Grupo.find({user: req.user.id});
    res.render('vergroup', {
        grupos
    });
  });
  
  router.get('/deletegroup/:id', async (req, res, next) => {
    let { id } = req.params;
    await Grupo.remove({_id: id});
    res.redirect('/Grupo');
  }); 

  router.get('/editarGrupo/:id', async (req, res, next) => {
    const grupos = await Grupo.findById(req.params.id);
    console.log(grupos)
    res.render('editarGrupo', { grupos });
  });

  
  router.post('/editarGrupo/:id', async (req, res, next) => {
    const { id } = req.params;
    await Grupo.update({_id: id}, req.body);
    res.redirect('/verGroup');
  });
  
  router.get('/editarGrupo/:id', async (req, res, next) => {//en vez de miaccount cambiar por perfiles y asi con grupos tambien
    const { id } = req.params;
    await Grupo.update({_id: id}, req.body);
    res.render('/editarGrupo');
  });


  router.get('/chatgroup/:id',  async (req, res, next) => {
    const { id } = req.params;
    const grupos = await Grupo.find ({_id: id}, req.body);
    const perfiles = await Perfil.find();
    const usuarios = await Usuario.find();
    res.render('chatgroup',{
      grupos,perfiles,usuarios
    });
  });

  
  module.exports = router;