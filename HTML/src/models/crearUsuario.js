const mongoose = require('mongoose');
const{Schema} = mongoose;

const DateUserSchema = new Schema({
    usuario:{type: String, required:true},
    carrera:{type: String, required:true},
    cursandoActualemnte:{type:Array, required:true},
    preparandoFinales:{type:Array, required:true},
    serTutor:{type:Boolean, required:true},
    MateriaAplicadas:{type:Array, required:true},     
    date:{type: Date, default: Date.now}   
});

module.exports = mongoose.model('crearUsuario', DateUserSchema)

