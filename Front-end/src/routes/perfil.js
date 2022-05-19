const express = require('express');
const router = express.Router();
const axios = require('axios');
require('../configuration/urlBackEnd')
const urlBackEndPerfil = urlBackEnd + '/perfil/'

router.get('x',function(req,res,next){
  const respuesta = await axios.get(urlBackEndPerfil)
  .then(response=>{
    console.log(response.data)
  }).catch(err=>{
    console.log(err)
  })
  
})

router.get('x',function(req,res,next){
  const respuesta = await axios.get(urlBackEndPerfil + '/perfil/:id',id)
  .then(response=>{
    console.log(response.data)
  }).catch(err=>{
    console.log(err)
  })
  
})

router.get('x',function(req,res,next){
  const respuesta = await axios.get(urlBackEndPerfil + 'create')
  .then(response=>{
    console.log(response.data)
  }).catch(err=>{
    console.log(err)
  })
})

router.get('x',function(req,res,next){
  const respuesta = await axios.get(urlBackEndPerfil + 'create')
  .then(response=>{
    console.log(response.data)
  }).catch(err=>{
    console.log(err)
  })  
})


router.get('x',function(req,res,next){
  const respuesta = await axios.get(urlBackEndPerfil + 'delete/:id',id)
  .then(response=>{
    console.log(response.data)
  }).catch(err=>{
    console.log(err)
  })
})


router.get('x',function(req,res,next){
  const respuesta = await axios.get(urlBackEndPerfil +'update/id',id)
  .then(response=>{
    console.log(response.data)
  }).catch(err=>{
    console.log(err)
  })
})







module.exports = router;