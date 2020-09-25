const express = require('express');
const router = express.Router();
const Grupo = require('../models/crearGrupo');
const Perfil = require('../models/crearPerfil');
const Usuario = require('../models/usuario');


//estoy hay que modificarlo
router.post('/solicitudesgroup', async (req, res, next) => {

    const grupos = new Grupo(req.body);
    await grupos.save();
    console.log(grupos)
    
  });

  router.get('/solicitudesgroup', async (req, res, next) => {
    const grupos = await Grupo.find({user: req.user.id})
    res.render('solicitudesgroup', {
      grupos
    });
  });

  module.exports = router;