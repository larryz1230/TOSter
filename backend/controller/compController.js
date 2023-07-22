const asyncHandler = require('express-async-handler')
const Company = require('../models/companyModels');

const registerCompany = asyncHandler(async (req, res) => {
    const { company, b1, b2, b3, b4, b5, pScore } = req.body;

    res.json({
        company,
        b1,
        b2,
        b3,
        b4,
        b5,
        pScore,
    });
});



module.exports = { registerCompany };