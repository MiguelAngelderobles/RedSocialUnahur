const express = require('express');
const router = express.Router();
const axios = require('axios');
require('../configuration/urlBackEnd')
const urlBackEndGrupo = urlBackEnd + '/grupo/'

axios.post(urlBackEndGrupo + 'add')
.then(response=>{
  console.log(response.data)
}).catch(err=>{
  console.log(err)
})

axios.get(urlBackEndGrupo + 'join')
.then(response=>{
  console.log(response.data)
}).catch(err=>{
  console.log(err)
})

axios.get(urlBackEndGrupo)
.then(response=>{
  console.log(response.data)
}).catch(err=>{
  console.log(err)
})

axios.get(urlBackEndGrupo + 'create')
.then(response=>{
  console.log(response.data)
}).catch(err=>{
  console.log(err)
})

axios.get(urlBackEndGrupo + 'delete/:id',id)
.then(response=>{
  console.log(response.data)
}).catch(err=>{
  console.log(err)
})

axios.get(urlBackEndGrupo + 'update/:id',id)
.then(response=>{
  console.log(response.data)
}).catch(err=>{
  console.log(err)
})


  module.exports = router;