const router = require('express').Router();
// const fetch = require('node-fetch');
const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);

module.exports = router;