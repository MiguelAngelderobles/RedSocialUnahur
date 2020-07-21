const mongoose = require('mongoose')
const Usuario = mongoose.Usuario;

//
new Usuario({
    nombreUsuario: String,
    contrasenia: String,
    email: String,
    carrera: String,
    cursandoActualemnte:[],
    preparandoFinales:[],
    serTutor: Boolean,
    MateriaAplicadas:[]
})
