const User = require('../models/user');
const { fetchWeatherData } = require('./fetchWeatherData');
const { sendWeatherReport } = require('./sendWeatherReport');
const dotenv = require('dotenv');

dotenv.config();

const updateWeatherDataAndSendEmails = async () => {
  const users = await User.find();

  users.forEach(async (user) => {
    const weatherReport = await fetchWeatherData(user.location.lat, user.location.lon);
    const date = new Date();

    user.weatherData.push({ date, weather: weatherReport });
    await user.save();

    sendWeatherReport(user.email, weatherReport);
  });
};

module.exports = { updateWeatherDataAndSendEmails };
