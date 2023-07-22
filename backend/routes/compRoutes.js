const express = require('express');
const { registerCompany, findCompany } = require('../controller/compController');
const router = express.Router();


router.route('/').post(registerCompany);
router.route('/results').post(findCompany);


module.exports = router;