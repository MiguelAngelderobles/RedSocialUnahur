const mongoose = require('mongoose');

const Perfil = mongoose.Schema({
  nombre: { 
  	type: String, 
  	required: '{PATH} is required!'
  },
  carrera: {
    type: String,
    required: '{PATH} is required!'
  },
  cursandoActualmente: {
    type: String,
    required: '{PATH} is required!'
  },
  preparandoFinales: {
    type: String,
    required: '{PATH} is required!'
  },
  usuario:{
    type: mongoose.Schema.Types.ObjectId,
    href:'usuario'
  },
  status: {
    type: Boolean,
    default: false
  }});


module.exports = mongoose.model('perfil', Perfil);