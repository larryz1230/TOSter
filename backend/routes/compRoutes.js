const express = require('express');
const { registerCompany } = require('../controller/compController');
const router = express.Router();


router.route('/').post(registerCompany);


module.exports = router;