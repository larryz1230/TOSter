const express = require('express');
const data = require('./Data/SampleData');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const compRoutes = require('./routes/compRoutes');
const cors = require('cors');

const app = express();
app.use(cors());

const path = require('path');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
dotenv.config({ path: path.resolve(__dirname, '.env') });
connectDB();
app.use(express.json());

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

app.use('/api/companies', compRoutes);
app.use('/api/data/results', compRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));