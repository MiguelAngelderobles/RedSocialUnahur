const express = require('express');
const router = express.Router();
const axios = require('axios');
require('../configuration/urlBackEnd')
const urlBackEndPerfil = urlBackEnd + '/perfil/'

axios.get(urlBackEndPerfil)
.then(response=>{
  console.log(response.data)
}).catch(err=>{
  console.log(err)
})

axios.get(urlBackEndPerfil + ':id',id)
.then(response=>{
  console.log(response.data)
}).catch(err=>{
  console.log(err)
})


axios.get(urlBackEndPerfil + 'create')
.then(response=>{
  console.log(response.data)
}).catch(err=>{
  console.log(err)
})

axios.get(urlBackEndPerfil + 'delete/:id',id)
.then(response=>{
  console.log(response.data)
}).catch(err=>{
  console.log(err)
})

axios.get(urlBackEndPerfil +'update/id',id)
.then(response=>{
  console.log(response.data)
}).catch(err=>{
  console.log(err)
})



module.exports = router;