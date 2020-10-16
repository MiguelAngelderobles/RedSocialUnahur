const mongoose = require('mongoose');
const { Schema } = mongoose;

const SolicitudSchema = new Schema({

  user: { type: Schema.ObjectId, ref: 'usuario' },
	followed: { type: Schema.ObjectId, ref: 'usuario' },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Solicitud', SolicitudSchema);