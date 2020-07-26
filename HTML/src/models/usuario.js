const mongoose = require('mongoose')
const Usuario = mongoose.Usuario;

//
const Usuario = new Schema({
    nombreUsuario: String,
    contrasenia: String,
    email: String,
    carrera: String,
    cursandoActualemnte:[],
    preparandoFinales:[],
    serTutor: Boolean,
    MateriaAplicadas:[]
})

module.exports = mongoose.model('usuario',Usuario)