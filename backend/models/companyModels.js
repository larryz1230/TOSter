const mongoose = require('mongoose')


const companySchema = mongoose.Schema(
    {
        company: {
            type: String,
            required: true
        },
        b1: {
            type: String,
            required: true
        },
        b2: {
            type: String,
            required: true
        },
        b3: {
            type: String,
            required: true
        },
        b4: {
            type: String,
            required: true
        },
        b5: {
            type: String,
            required: true
        },
        pScore: {
            type: String,
            required: true
        },
        optout: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

const Company = mongoose.model('Company', companySchema);

module.exports = Company;