const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.render('hola_mundo');
  });

module.exports = router;
