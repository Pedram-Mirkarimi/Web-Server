# Weather Web Server 🌦️

A Node.js web server that provides real-time weather information using a geocoding service and a forecast API. The application uses Express.js for backend handling and Handlebars (HBS) for dynamic page rendering.

---

## 🚀 Features
✅ Search for any city and get weather forecast  
✅ Dynamic Handlebars-based UI  
✅ Static & dynamic content support  
✅ Fully configured Express routing  
✅ Ready for deployment (Heroku, Render, etc.)

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- Handlebars (HBS)
- Weather/Geocoding external API (Mapbox & OpenWeather recommended)

---

## 📁 Project Structure
```
web-server/
│
├─ public/                # Static assets (CSS, client JS, images)
├─ src/
│  ├─ utils/
│  │   ├─ geocode.js     # Converts address to geo coordinates
│  │   └─ forecast.js    # Fetches weather forecast
│  ├─ app.js             # Express server entry point
│
├─ templates/
│  ├─ views/             # HBS page templates
│  └─ partials/          # Header/footer partials
│
├─ package.json
└─ README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Install dependencies
```sh
npm install
```

### 2️⃣ Add your API keys  
Create a `.env` file or set environment variables:

```
MAPBOX_TOKEN=<YOUR_MAPBOX_API_KEY>
WEATHER_TOKEN=<YOUR_WEATHER_API_KEY>
```

### 3️⃣ Run development server
```sh
npm start
```

---

## 🌐 Usage
Open browser:
```
http://localhost:3000
```

Search any city to retrieve weather info ✅

---

## 🚀 Deployment
Compatible with:
- Heroku
- Render
- Railway
- Any Node.js hosting

Remember to configure **environment variables** in production.

---

## ✨ Future Improvements
- Improved UI / better styling
- Add support for POST & user authentication
- Response caching for performance
- Progressive Web App (offline mode)
- Logging & error tracking

---

## 🤝 Contributing
Pull requests are welcome ✅  
For major changes, please open an issue first.

---

## 👨‍💻 Developer
**Pedram Mirkarimi**  
GitHub: https://github.com/Pedram-Mirkarimi
