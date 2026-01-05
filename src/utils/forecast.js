const request = require('request');

const forecast = (lat, lon, callback) => {
  const apiKey = process.env.OPENWEATHER_KEY;

  if (!apiKey) {
    callback('Missing OpenWeather API key. Set OPENWEATHER_KEY in .env', undefined);
    return;
  }

  const url =
    'https://api.openweathermap.org/data/2.5/weather?lat=' +
    lat +
    '&lon=' +
    lon +
    '&appid=' +
    apiKey +
    '&units=metric';

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect the weather service!', undefined);
    } else if (!body) {
      callback('Unable to get weather data.', undefined);
    } else if (body.cod == 400) {
      callback('Unable to find location.', undefined);
    } else {
      callback(
        undefined,
        body.weather[0].description +
          ". It's currently " +
          body.main.temp +
          ' degrees out.' +
          ' The humidity is ' +
          body.main.humidity +
          '%.' +
          ' Maximum temperature equals to ' +
          body.main.temp_max +
          ' and minimum temperature equals to ' +
          body.main.temp_min +
          '.'
      );
    }
  });
};

module.exports = forecast;
