require('dotenv').config();

const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

const apiKey = process.env.API_KEY;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/weather', async(req,res) => {
    const {lat, lon} = req.query;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch weather data'});
    }
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`serve is running on port ${port}`);
})