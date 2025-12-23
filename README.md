<h1 align="center">🌤️ Weather Web Server</h1>

<p align="center">
  A dynamic <b>Node.js + Express</b> web server that delivers real-time weather forecasts using
  <b>Mapbox (Geocoding)</b> and <b>Weatherstack (Weather)</b> — rendered with <b>Handlebars (hbs)</b>.
</p>

<p align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-Backend-success" />
  <img alt="Express" src="https://img.shields.io/badge/Express.js-Web%20Server-black" />
  <img alt="Handlebars" src="https://img.shields.io/badge/Handlebars-Templating-orange" />
  <img alt="API" src="https://img.shields.io/badge/APIs-Mapbox%20%2B%20Weatherstack-blue" />
  <img alt="Language" src="https://img.shields.io/badge/Language-JavaScript-yellow" />
</p>

---

## 📚 Table of Contents
- [✨ Features](#-features)
- [🧰 Tech Stack](#-tech-stack)
- [🧩 How It Works](#-how-it-works)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🔐 API Keys](#-api-keys)
- [🖥️ Using the App](#️-using-the-app)
- [🛣️ Roadmap](#️-roadmap)
- [🤝 Contributing](#-contributing)
- [👤 Author](#-author)
- [📜 License](#-license)

---

## ✨ Features
- 🧭 **Geocoding (Mapbox)**: Converts a location name into coordinates (lat/long)
- 🌦️ **Weather Forecast (Weatherstack)**: Fetches live weather data for the coordinates
- 🧩 **Dynamic Pages**: `index`, `about`, `help`, and a custom `404` page with Handlebars layouts/partials
- 🧼 **Clean UI**: Styled with pure CSS + simple client-side JavaScript
- 🧯 **Error Handling**: Friendly messages for invalid locations or API failures

---

## 🧰 Tech Stack

| Category | Technology | What it’s used for |
|---|---|---|
| Runtime | Node.js | Server-side JavaScript runtime |
| Server | Express.js | Routing, middleware, web server |
| Templates | Handlebars (hbs) | Rendering dynamic HTML pages |
| APIs | Mapbox + Weatherstack | Geocoding + weather data |
| Client | HTML/CSS/JS | UI + browser fetch logic |
| HTTP Client | `postman-request` | Server-side external API requests |

---

## 🧩 How It Works

**User Flow**
1. User enters a location in the UI (e.g., “Tehran”).
2. Client-side JS sends a request to the server.
3. Server calls **Mapbox** to turn the location into coordinates.
4. Server calls **Weatherstack** with coordinates to fetch forecast data.
5. Server returns the result to the browser and the UI updates.

**High-level Architecture**
- 🖥️ Frontend: `public/` (CSS + client JS)
- 🧠 Backend: `src/app.js` (Express routes)
- 🧰 Utilities: `src/utils/` (geocode + forecast helpers)
- 🧾 Views: `templates/` (hbs templates + partials)

---

## 📁 Project Structure

```text
Weather-Web-Server/
│
├── public/
│   ├── css/style.css       # Main stylesheet
│   ├── img/weather.png     # App icon
│   └── js/app.js           # Client-side JS (fetch + DOM updates)
│
├── src/
│   ├── app.js              # Express server (routes + config)
│   └── utils/
│       ├── geocode.js      # Mapbox helper
│       └── forecast.js     # Weatherstack helper
│
├── templates/
│   ├── partials/           # Reusable layout parts
│   │   ├── header.hbs
│   │   └── footer.hbs
│   └── views/              # Page templates
│       ├── index.hbs
│       ├── about.hbs
│       ├── help.hbs
│       └── 404.hbs
│
└── package.json
````

---

## 🚀 Getting Started

### ✅ Prerequisites

* Node.js installed
* API keys for:

  * Mapbox (Geocoding)
  * Weatherstack (Weather)

### 📥 Installation

```bash
git clone https://github.com/Pedram-Mirkarimi/Weather-Web-Server.git
cd Weather-Web-Server
npm install
```

### ▶️ Run

```bash
node src/app.js
```

Then open:

* `http://localhost:3000`

---

## 🔐 API Keys

This project expects API keys to be set inside:

* `src/utils/geocode.js`
* `src/utils/forecast.js`

> ✅ **Recommendation (portfolio upgrade):** Use environment variables via a `.env` file (and add it to `.gitignore`) instead of hardcoding secrets.

Example `.env` you can adopt later:

```env
MAPBOX_TOKEN=your_mapbox_token
WEATHERSTACK_KEY=your_weatherstack_key
PORT=3000
```

---

## 🖥️ Using the App

1. Visit: `http://localhost:3000`
2. Enter a location (e.g., `Berlin`, `Tehran`, `Boston`)
3. Click **Search**
4. The page displays:

   * resolved location
   * current weather / forecast output

---

## 🛣️ Roadmap

Make it even more impressive for employers:

* [ ] 🔒 Move API keys to `.env` (dotenv)
* [ ] ⚡ Add loading states + better UI feedback
* [ ] 🧪 Add tests (Jest) for utils (geocode/forecast)
* [ ] 🧰 Add linting + formatting (ESLint/Prettier)
* [ ] 🌍 Deploy (Render / Railway / Fly.io) + add a live demo link
* [ ] 📦 Add `npm start` script + `nodemon` dev script

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👤 Author

**Pedram Mirkarimi**
GitHub: [https://github.com/Pedram-Mirkarimi](https://github.com/Pedram-Mirkarimi)
