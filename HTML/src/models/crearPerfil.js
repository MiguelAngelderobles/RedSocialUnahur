const { Schema, model } = require("mongoose");

const PerfilSchema = Schema({
  nombre: String,
  carrera: String,
  cursandoActualmente: String,
  preparandoFinales: String,
  
  user:{
    type:String,
    required:true
  },
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = model('perfiles', PerfilSchema);