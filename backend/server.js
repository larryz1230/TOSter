const express = require('express');
const data = require('./Data/SampleData');
const dotenv = require('dotenv');
//const connectDB = require("./config/db");

const app = express();

const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '.env') });
//connectDB();

app.get('/', (req, res) => {
    res.send("API is running...");
});

app.get('/api/data', (req, res) => {
    res.json(data)
});

app.get('/api/data/:comp', (req, res) => {
    const company = data.find((n) => n._comp === req.params.company);

    res.send(company);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));