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
    // usuario:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     href:'usuario'
    // },
  created: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Chat', ChatSchema);