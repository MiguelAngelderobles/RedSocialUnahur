const mongoose = require('mongoose');
const { Schema } = mongoose;

const SolicitudSchema = new Schema({

  mensaje: String,
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Solicitud', SolicitudSchema);