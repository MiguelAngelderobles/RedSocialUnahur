const router = require("express").Router();
const apiGroupRoutes = require('./modelRoutes/group');

router.use('/group', apiGroupRoutes);

module.exports = router;