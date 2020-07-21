const express = require('express')
const router = express.Router() 
const mongoose = require('mongoose')
const morgan = require('morgan')
module.exports = router;

//conecto base de datos
mongoose.connect('mongovb://localhost/cruds')
    .then(db => console.log('db connected'))
    .catch(err => console.log('db no connect'));
