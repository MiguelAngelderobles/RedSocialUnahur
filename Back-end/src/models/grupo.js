const { Schema, model } = require("mongoose");

const GrupoSchema = Schema({
  nombreGrupo: {
    type: String,

  },
  descripcionGrupo: {
    type: String,

  },
  cantParticipantes: {
    type: String,

  },
  materiaQueAplica: {
    type: [],

  },
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = model('grupo', GrupoSchema);
