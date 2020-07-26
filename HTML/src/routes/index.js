const express = require('express')
const { modelNames } = require('mongoose')

const router = express.Router()


router.get('/',(req,res) =>{
    res.send('Hello word desde el repo ')
})
module.exports = router