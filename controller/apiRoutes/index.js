const router = require('express').Router();
const mailer = require('./mailer');

router.use('/mail', mailer);

module.exports = router;