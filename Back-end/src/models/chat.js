const { Schema, model } = require("mongoose");


const ChatSchema = new Schema({
    nombre:String, 
    mensaje: String,
    perfil:{
        type: mongoose.Schema.Types.ObjectId,
        href:'perfil'
    },
  created: { type: Date, default: Date.now }
});


module.exports = model('Chat', ChatSchema);