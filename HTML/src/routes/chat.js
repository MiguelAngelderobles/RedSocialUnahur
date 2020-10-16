const express = require('express');
const router = express.Router();
const Grupo = require('../models/crearGrupo');
const Perfil = require('../models/crearPerfil');
const Usuario = require('../models/usuario');
const Chat = require('../models/Chat');

/*
router.get('/chat', function(req, res) {
  Chat.find({},function(err,chat) {
    Perfil.populate(chat,{path:"nick"}, function(err,chat){
      res.status(200).send(chat);
     
    })
    res.render('chat');
})  
});
*/
/*
router.get('/chat', async (req, res, next) => {
  const chat = await Chat.find();
  res.render('chat', {
    chat
  });
});
*/

router.get('/chat', (req, res, next) => {
    res.render('chat');
    
  });

  



module.exports = router;