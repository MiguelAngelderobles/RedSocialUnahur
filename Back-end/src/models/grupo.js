const { Schema, model } = require("mongoose");

const GrupoSchema = new Schema({
  nombreGrupo: {type: String},
  descripcionGrupo: {type: String},
  cantParticipantes: {type: String},
  materiaQueAplica: {type:[String]},
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = model('grupos', GrupoSchema);
