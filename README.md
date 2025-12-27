# WeatherNow Web (Learning Project)

A small learning project for my **FIAE Ausbildung application (start: 08/2026)**.  
Users enter an address, the server converts it to coordinates (Mapbox), then fetches the weather data (OpenWeather).

## Features
- Address → coordinates (Mapbox Geocoding)
- Weather lookup (OpenWeather)
- Server-rendered pages with Handlebars (hbs)
- Simple client-side request to `GET /weather?address=...`
- Basic input validation and error handling

## Tech Used
- Node.js, Express
- Handlebars (hbs)
- Mapbox API, OpenWeather API
- HTML/CSS/JavaScript (static files)

## Getting Started (Local)
### 1) Install
```bash
npm install
````

### 2) Environment Variables

Create a `.env` file in the project root (see `.env.example`):

* `PORT=3000`
* `MAPBOX_TOKEN=...`
* `OPENWEATHER_KEY=...`

### 3) Run

```bash
npm start
```

Open:

* [http://localhost:3000](http://localhost:3000)

## API

Example:

```bash
curl "http://localhost:3000/weather?address=Berlin"
```

## Notes

This repository is a **learning/practice project** (Lern-/Übungsprojekt).
Feedback is welcome.
