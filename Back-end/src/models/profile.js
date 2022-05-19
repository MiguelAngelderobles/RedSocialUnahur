const mongoose = require('mongoose');

const Profile = mongoose.Schema({
  nombre: String,
  carrera: String,
  cursandoActualmente: String,
  preparandoFinales:String,
  user:{
    type: mongoose.Schema.Types.ObjectId,
    href:'user'
  },
  status: {
    type: Boolean,
    default: false
  }});


module.exports = mongoose.model('profile', Profile);