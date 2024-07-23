const path = require('path');
const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();
const publicDirPath = path.join(__dirname, '../public');
const viewsDir = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsDir);
hbs.registerPartials(partialPath);

app.use(express.static(publicDirPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Pedram Mirkarimi',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Pedram Mirkarimi',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Pedram Mirkarimi',
    helpText: 'This is some helpful text.',
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address!',
    });
  }
  const address = req.query.address;
  geocode(address, (error, data) => {
    if (error) {
      return res.send({ error });
    }
    const parsedData = JSON.parse(data);
    forecast(
      parsedData.latitude,
      parsedData.longitude,
      (error, forecastData) => {
        if (error) {
          return res.send({ error })
        }
        res.send({
          forecast: forecastData,
          location: parsedData.location,
          address: address,
        });
      }
    );
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    errorMessage: 'Help article not found!',
    name: 'Pedram Mirkarimi',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    errorMessage: 'Page not found!',
    name: 'Pedram Mirkarimi',
  });
});

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
