const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const controllerGroup = require('../../controller/grup.controller')

router.use(bodyParser.urlencoded({extend:true}))
router.use(bodyParser.json())

router.post('/', controllerGroup.post);
  
router.get('/:id', controllerGroup.getById);

router.get('/', controllerGroup.getAll);

router.delete('/:id',controllerGroup.delete);// falla pero borra 
  
router.put('/:id', controllerGroup.put);  
  
module.exports = router;
