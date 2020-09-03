const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');


const { Schema } = mongoose;

//
const Usuario = new Schema({
    email: String,
    password: String
})

Usuario.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));//hash de la password
  };
  
  Usuario.methods.comparePassword= function (password) {
    return bcrypt.compareSync(password, this.password); //si contraseñas coinciden va a retornar un true, caso contrario un false
  };

module.exports = mongoose.model('usuario',Usuario)