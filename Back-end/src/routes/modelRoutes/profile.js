const express = require('express');
const router = express.Router();
const controllerProfile = require("../../controller/profile.controller")
const bodyParser=require('body-parser');

router.use(bodyParser.urlencoded({extend:true}))

router.use(bodyParser.json())

router.get('/', controllerProfile.getAll);

router.get('/:id', controllerProfile.getById);

router.post('/', controllerProfile.post);

router.put('/:id', controllerProfile.put);

router.delete('/:id', controllerProfile.delete); 

module.exports = router;
