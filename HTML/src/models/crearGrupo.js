const { Schema, model } = require("mongoose");

const GrupoSchema = Schema({
  nombreGrupo: String,
  descripcionGrupo: String,
  cantParticipantes: String,
  materiaQueAplica: [],
  user:{
    type:String,
    required:true
  },
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = model('grupos', GrupoSchema);