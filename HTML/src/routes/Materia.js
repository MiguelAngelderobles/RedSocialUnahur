const express = require('express');
const router = express.Router();

const Materia= require('../models/Materia');


router.get('/crearaccount', async (req, res) => {
    const materias = await Materia.find(req.params.id);
    res.render('crearaccount', {
        materias
    });
  });


module.exports = router;