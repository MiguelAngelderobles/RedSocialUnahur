const { Schema, model } = require("mongoose");

const GrupoSchema = new Schema({
  nombreGrupo: String,
  descripcionGrupo: String,
  cantParticipantes: String,
  materiaQueAplica:[String],
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = model('grupos', GrupoSchema);
