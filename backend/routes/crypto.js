const express = require('express');
const router = express.Router();

let crypto = require('../models/crypto_model');

router.route('/').get((req ,res) => {
    crypto.find()
        .then(cryptos => res.json(cryptos))
        .catch(err => res.status(400).json('Error: '+err));
});




module.exports = router;