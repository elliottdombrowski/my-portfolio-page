console.log('API working?');
const router = require('express').Router();
const nodemailer = require('nodemailer');

//TODO - UPDATE SERVICE DYNAMICALLY?
const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            // ???
        }
    }
);

router.post('/send', (req, res) => {
    console.log('Route working');
    transporter.sendMail(req.body, function (err, info) {
        if(err) {
            res.json(err);
            return;
        }
        console.log('Send: ' + info.response);
    });
})

module.exports = router;