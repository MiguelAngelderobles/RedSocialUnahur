const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const User = mongoose.Schema({
  email: { 
  	type: String, 
  	required: '{PATH} is required!'
  },
  password: {
    type: String,
    required: '{PATH} is required!'
  }
});

User.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));//hash de la password
  };
  
  User.methods.comparePassword= function (password) {
    return bcrypt.compareSync(password, this.password); //si contraseñas coinciden va a retornar un true, caso contrario un false
  };

module.exports = mongoose.model('user',User)