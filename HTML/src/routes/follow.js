const express = require('express');
const router = express.Router();
const Grupo = require('../models/crearGrupo');
const Perfil = require('../models/crearPerfil');
const Usuario = require('../models/usuario');

/*
//estoy hay que modificarlo
router.post('/solicitudesgroup', async (req, res, next) => {

    const grupos = new Grupo(req.body);
    await grupos.save();
    console.log(grupos)
    
  });
*/

  router.get('/solicitudesgroup', async (req, res, next) => {
    const grupos = await Grupo.find({ _id: req.query.id });
    const perfiles = await Perfil.find();
    const usuarios = await Usuario.find({ _id: req.query.id });
    res.render('solicitudesgroup', {
      grupos, perfiles,usuarios
    });
  });


  

  module.exports = router;