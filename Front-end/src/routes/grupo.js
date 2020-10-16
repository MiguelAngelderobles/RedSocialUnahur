const express = require('express');
const router = express.Router();
const axios = require('axios');
const urlBackEnd = require('../configuration/urlBackEnd')
const urlBackEndGrupo = urlBackEnd + '/grupo/'

router.get('x',function(req,res,next){
  const respuesta = await axios.post(urlBackEndGrupo + 'add')
  .then(response=>{
    console.log(response.data)
  }).catch(err=>{
    console.log(err)
  })
})

router.get('x',function(req,res,next){
  const respuesta = await axios.get(urlBackEndGrupo + 'join')
  .then(response=>{
    console.log(response.data)
  }).catch(err=>{
    console.log(err)
  })  
})

router.get('x',function(req,res,next){
  const respuesta = await axios.get(urlBackEndGrupo)
  .then(response=>{
    console.log(response.data)
  }).catch(err=>{
    console.log(err)
  })
})

router.get('x',function(req,res,next){
  const respuesta = await axios.post(urlBackEndGrupo + 'create')
  .then(response=>{
    console.log(response.data)
  }).catch(err=>{
    console.log(err)
  })
})

router.get('x',function(req,res,next){
  const respuesta = await axios.post(urlBackEndGrupo + 'delete/:id',id)
  .then(response=>{
    console.log(response.data)
  }).catch(err=>{
    console.log(err)
  })
})


router.get('x',function(req,res,next){
  const respuesta = await axios.get(urlBackEndGrupo + 'update/:id',id)
  .then(response=>{
    console.log(response.data)
  }).catch(err=>{
    console.log(err)
  })
})


  module.exports = router;