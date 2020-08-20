const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');


const { Schema } = mongoose;

//
const Usuario = new Schema({
    email: String,
    password: String
})

Usuario.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  };
  
  Usuario.methods.comparePassword= function (password) {
    return bcrypt.compareSync(password, this.password);
  };

module.exports = mongoose.model('usuario',Usuario)