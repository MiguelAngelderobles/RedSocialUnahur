const router = require("express").Router();
const apiUserRoutes = require('./modelRoutes/user');

router.use('/user', apiUserRoutes);

module.exports = router;