const router = require("express").Router();
const apiProfileRoutes = require('./modelRoutes/profile');

router.use('/profile', apiProfileRoutes);

module.exports = router;