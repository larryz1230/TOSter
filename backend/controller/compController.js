const asyncHandler = require('express-async-handler')
const Company = require('../models/companyModels');

const registerCompany = asyncHandler(async (req, res) => {
    const { company, b1, b2, b3, b4, b5, pScore } = req.body;

    const companyExists = await Company.findOne({ company });

    if(companyExists) {
        res.status(400);
        throw new Error('Company Already Exists');
    }

    const comp = await Company.create({
        company,
        b1,
        b2,
        b3,
        b4,
        b5,
        pScore,
    });

    if (comp) {
        res.status(201).json({
            _comp: comp.company,
            b1: comp.b1,
            b2: comp.b2,
            b3: comp.b3,
            b4: comp.b4,
            b5: comp.b5,
            pScore: comp.pScore,
        })
    } else {
        res.status(400);
        throw new Error('Error')
    }

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