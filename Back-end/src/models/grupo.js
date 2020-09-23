const { Schema, model } = require("mongoose");

const GrupoSchema = Schema({
  nombreGrupo: {
    type: String,
    required: '{PATH} is required!'
  },
  descripcionGrupo: {
    type: String,
    required: '{PATH} is required!'
  },
  cantParticipantes: {
    type: String,
    required: '{PATH} is required!'
  },
  materiaQueAplica: {
    type: [],
    required: '{PATH} is required!'
  },
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = model('grupo', GrupoSchema);