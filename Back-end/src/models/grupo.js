const { Schema, model } = require("mongoose");

const Grupo = new Schema({
  nombreGrupo: String,
  descripcionGrupo: String,
  cantParticipantes: String,
  // materiaQueAplica: {
  //   type: [String],
  // },
  // status: {
  //   type: Boolean,
  //   default: false
  // }
});

module.exports = model('grupo', Grupo);