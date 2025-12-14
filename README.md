# 🌦️ Weather Web-Server

A dynamic web server application built with **Node.js** and **Express.js** that provides real-time weather forecasts. This application fetches weather data from the **Weatherstack API** and geolocation information from the **Mapbox API** to deliver accurate weather information for any specified location.

The user interface is rendered using **Handlebars (hbs)**, and the design is styled with pure CSS for a clean and simple user experience.

---

## ✨ Features

- **Dynamic Web Pages**: Serves multiple pages (`index`, `about`, `help`) with a consistent layout using Handlebars partials.
- **Real-Time Weather Forecast**: Enter a location to get the current weather conditions and forecast.
- **API Integration**: Seamlessly integrates with two external APIs:
  - **Mapbox API**: Converts a location name into geographic coordinates (latitude and longitude).
  - **Weatherstack API**: Fetches weather data for the given coordinates.
- **User-Friendly Interface**: A simple and clean UI for easy interaction.
- **Error Handling**: Provides clear error messages for invalid inputs or API failures (e.g., location not found).

---

## 🛠️ Tech Stack

| Category              | Technology            | Description                                        |
| --------------------- | --------------------- | -------------------------------------------------- |
| **Backend Framework** | Express.js            | For building the web server and handling routes.   |
| **Templating Engine** | Handlebars (hbs)      | For rendering dynamic web pages.                   |
| **External APIs**     | Mapbox, Weatherstack  | For geocoding and weather data.                    |
| **Frontend**          | HTML, CSS, JavaScript | For the client-side structure, styling, and logic. |
| **HTTP Client**       | `postman-request`     | For making requests to external APIs.              |
| **Environment**       | Node.js               | The JavaScript runtime environment.                |

---

## 📂 Project Structure

The project is organized with a clear separation between server logic, public assets, and views.

```
Web-Server/
│
├── public/
│   ├── css/style.css       # Main stylesheet
│   ├── img/weather.png     # Application icon
│   └── js/app.js           # Client-side JavaScript for fetching data
│
├── src/
│   ├── app.js              # Main Express server configuration and routes
│   └── utils/
│       ├── geocode.js      # Utility for Mapbox API requests
│       └── forecast.js     # Utility for Weatherstack API requests
│
├── templates/
│   ├── partials/           # Reusable Handlebars partials (header, footer)
│   │   ├── header.hbs
│   │   └── footer.hbs
│   └── views/              # Handlebars page templates
│       ├── index.hbs
│       ├── about.hbs
│       ├── help.hbs
│       └── 404.hbs
│
└── package.json            # Project dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed.
- An API Access Key from [Mapbox](https://www.mapbox.com/).
- An API Access Key from [Weatherstack](https://weatherstack.com/).

### Installation & Setup

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/Pedram-Mirkarimi/Web-Server.git
    cd Web-Server
    ```

2.  **Install dependencies:**

    ```sh
    npm install
    ```

3.  **Set up your API keys:**
    You will need to add your API keys directly into the `src/utils/geocode.js` and `src/utils/forecast.js` files where indicated.

4.  **Start the server:**
    ```sh
    node src/app.js
    ```
    The application will be running on `http://localhost:3000`.

---

## 💡 How to Use

1.  Open your browser and navigate to `http://localhost:3000`.
2.  Enter a city name or any location into the search box (e.g., "Boston", "Tehran").
3.  Click the "Search" button.
4.  The application will display the location and the current weather forecast below the search box.

---
