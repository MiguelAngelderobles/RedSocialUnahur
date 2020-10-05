const mongoose = require('mongoose');
const { Schema } = mongoose;

const ChatSchema = new Schema({
    nombre: { 
        type: String, 
        required: '{PATH} is required!'
    },
    mensaje: {
        type: String,
        required: '{PATH} is required!'
    },
    perfil:{
        type: mongoose.Schema.Types.ObjectId,
        href:'perfil'
    },
  created: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Chat', ChatSchema);