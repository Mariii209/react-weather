import React, { useState, useEffect } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import CurrentWeather from "./CurrentWeather";

import "./Weather.css";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ continue: false });
  const [valueDefault, setValueDefault] = useState(props.defaultCity);

  function displayWeather(response) {
    console.log(response.data);
    let unixTime = response.data.time; // Unix timestamp from API
    let date = new Date(unixTime * 1000); // Convert Unix time to JavaScript Date
    let localTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }); // Format time
    setWeatherInfo({
      continue: true,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      unit: Math.round(response.data.temperature.current),
      city: response.data.city,
      time: localTime,
      icon: response.data.condition.icon_url,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchWeather();
  }
  function changeCity(event) {
    setValueDefault(event.target.value);
  }

  function fetchWeather() {
    let apiKey = "eac360db5fc86ft86450f3693e73o43f";
    let api = `https://api.shecodes.io/weather/v1/current?query=${valueDefault}&key=${apiKey}&units=metric`;
    axios.get(api).then(displayWeather);
  }

  useEffect(() => {
    const fetchOnLoad = () => {
      let apiKey = "eac360db5fc86ft86450f3693e73o43f";
      let api = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
      axios.get(api).then(displayWeather);
    };

    fetchOnLoad();
  }, [props.defaultCity]); // ✅ empty array: runs once, no dependencies, no warning

  return (
    <div className="Weather">
      <div className="WeatherContainer">
        <header>
          <img
            className="HeaderLogo"
            src="https://www.shecodes.io/assets/branding/logo-shecodes-3dfa60aeab8ef361842da5a2b6d46db3af1b7afafefee3dde0a9846389de754b.png"
            alt="Logo"
          />

          <form onSubmit={handleSubmit}>
            <input type="search" onChange={changeCity} className="SearchBar" />
            <input type="submit" value="Search" className="SearchButton" />
          </form>
        </header>
        <main>
          <CurrentWeather weatherInfo={weatherInfo} />
          <Forecast forecastCity={weatherInfo.city} />
        </main>
        <footer>
          <p>
            This project was coded by Maritza Gutierrez and is open-sourced on
            GitHub and hosted on Netlify
          </p>
        </footer>
      </div>
    </div>
  );
}
