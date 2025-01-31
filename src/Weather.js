import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(prop) {
  const [city, setCity] = useState(prop.defaultCity);
  const [valueDefault, setValueDefault] = useState("");

  function displayWeather(response) {
    console.log(response.data);
  }
  function changeCity(event) {
    setValueDefault(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCity(valueDefault);
    let apiKey = "eac360db5fc86ft86450f3693e73o43f";
    let api = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(api).then(displayWeather);
  }

  return (
    <div className="Weather">
      <header>
        <img
          src="https://www.shecodes.io/assets/branding/logo-shecodes-3dfa60aeab8ef361842da5a2b6d46db3af1b7afafefee3dde0a9846389de754b.png"
          alt="Logo"
        />

        <form onSubmit={handleSubmit}>
          <input
            type="search"
            value={valueDefault}
            onChange={changeCity}
            className="SearchBar"
          />
          <input type="submit" value="Search" className="SearchButton" />
        </form>
      </header>
      <main>
        <div className="CurrentDescription">
          <div className="WeatherDescription">
            <h3>{city}</h3>
            <p>Wednesday</p>
            <p>10:01pm</p>
            <p>Clouds</p>
            <p>Humidity: 68%</p>
            <p>Wind: 4.02km/h</p>
          </div>
          <div className="WeatherTemp">
            <p>☀️</p>
            <h2>14°C</h2>
          </div>
        </div>
        <div>
          <p>Fri</p>
          <p>🌤️</p>
          <p>14° 10°</p>
        </div>
      </main>
      <footer>
        <p>
          This project was coded by SheCodes and is open-sourced on GitHub and
          hosted on Netlify
        </p>
      </footer>
    </div>
  );
}
