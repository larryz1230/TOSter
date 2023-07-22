const express = require('express');
const data = require('./Data/SampleData');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

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
app.listen(5000, console.log(`Server started on PORT ${PORT}`));