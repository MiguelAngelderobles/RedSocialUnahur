const { Schema, model } = require("mongoose");

const PerfilSchema = Schema({
  nombre: String,
  carrera: String,
  cursandoActualmente: String,
  preparandoFinales: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = model('perfiles', PerfilSchema);