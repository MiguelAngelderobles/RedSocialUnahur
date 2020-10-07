const mongoose = require('mongoose');

const Perfil = mongoose.Schema({
  nombre: String,
  carrera: String,
  cursandoActualmente: String,
  preparandoFinales:String,
  usuario:{
    type: mongoose.Schema.Types.ObjectId,
    href:'usuario'
  },
  status: {
    type: Boolean,
    default: false
  }});


module.exports = mongoose.model('perfiles', Perfil);