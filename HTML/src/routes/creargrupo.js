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

  router.get('/unirsegroup', function(req,res,next){
    if(req.query.buscar){
      console.log("Buscar",req.query.buscar)
      Grupo.find({nombreGrupo:{$regex:'.*'+req.query.buscar+'.*',$options:"i"}}, function(error,documento){
        if(error){
          console.log("error")
        }else{
          var GruposListados=documento
          res.render('unirsegroup',{descripcionGrupo:"Home",grupos:GruposListados,buscar:req.query.buscar})
        }
      })
    }else{
      Grupo.find({},function(error,documento){
        if(error){
          console.log("error en finde")
        }else{
          var GruposListados=documento
          res.render('unirsegroup',{descripcionGrupo:"Home",grupos:GruposListados,buscar:''})
        }
      })
    }
  })


  module.exports = router;