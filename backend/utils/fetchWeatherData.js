const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const fetchWeatherData = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHERMAP_API_KEY}`;
  const response = await axios.get(url);
  return response.data;
};

module.exports = { fetchWeatherData };
