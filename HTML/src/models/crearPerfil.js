const { Schema, model } = require("mongoose");

const PerfilSchema = Schema({
  nombre: String,
  carrera: [],
  cursandoActualmente: [],
  preparandoFinales: [],
  
  image:{
    title: {type: String},
    description: {type: String},
    filename: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: { type: Number},
    created_at: {type: Date, default: Date.now()}
  },
    
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