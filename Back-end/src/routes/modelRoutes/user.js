const router = require('express').Router();
const controllerUser = require('../../controller/user.controller');

router.post('/registro', controllerUser.post);

router.post('/contrasenia', controllerUser.validPassword);

router.get('/:id', controllerUser.getUser)

router.get('/exito', controllerUser.exito);

router.get('/fallo', controllerUser.fallo);

router.get('/:email', controllerUser.getByEmail);

module.exports = router;