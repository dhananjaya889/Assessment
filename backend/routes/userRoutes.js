const express = require('express');
const User = require('../models/user');
const { fetchWeatherData } = require('../utils/fetchWeatherData');
const { sendWeatherReport } = require('../utils/sendWeatherReport');

const router = express.Router();

// Add user
router.post('/', async (req, res) => {
  const { email, lat, lon } = req.body;
  const user = new User({ email, location: { lat, lon }, weatherData: [] });
  await user.save();
  res.status(201).send(user);
});

// Update user location
router.put('/:email', async (req, res) => {
  const { email } = req.params;
  const { lat, lon } = req.body;
  const user = await User.findOneAndUpdate({ email }, { location: { lat, lon } }, { new: true });
  res.status(200).send(user);
});

// Get weather data for a given day and send it via email
router.get('/:email', async (req, res) => {
  const { email, date } = req.params;
  const user = await User.findOne({ email });
  
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  const weatherData = await fetchWeatherData(user.location.lat, user.location.lon);
  if (weatherData.length === 0) {
    return res.status(404).send({ message: "No weather data found for the specified date" });
  }


  const weatherReportHTML = 
    `
      <p><strong>Location:</strong> Latitude ${user.location.lat}, Longitude ${user.location.lon}</p>
      <p><strong>Temperature:</strong> ${weatherData.main.temp}K</p>
      <p><strong>Weather:</strong> ${weatherData.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${weatherData.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${weatherData.wind.speed} m/s</p>
      <p><strong>Cloudiness:</strong> ${weatherData.clouds.all}%</p>
    `;

  sendWeatherReport(user.email, weatherReportHTML);

  res.status(200).send({ message: "Weather data sent via email", weatherData });
});

module.exports = router;
