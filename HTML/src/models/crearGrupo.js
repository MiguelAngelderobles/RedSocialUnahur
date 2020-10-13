const { ObjectId } = require("mongodb");
const { Schema, model } = require("mongoose");

const GrupoSchema = Schema({
  nombreGrupo: String,
  descripcionGrupo: String,
  cantParticipantes: String,
  materiaQueAplica: String,
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