const express = require('express')
const app = express('')
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(express.static("img"))
app.use(express.urlencoded({extended:true}))
app.use(express.json());//revisar
app.use(express.static(__dirname + '/public'));
app.use(express.static("src/views/img"));
