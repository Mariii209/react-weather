import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [valueDefault, setValueDefault] = useState("");

  function displayWeather(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCity(valueDefault);
    let apiKey = "c4249306fe36f002cd05252621ef3fa6";
    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(api).then(displayWeather);
  }
  function changeCity(event) {
    setValueDefault(event.target.value);
  }
  return (
    <div>
      <img
        src="https://www.shecodes.io/assets/branding/logo-shecodes-3dfa60aeab8ef361842da5a2b6d46db3af1b7afafefee3dde0a9846389de754b.png"
        alt="Logo"
      />
      <form onSubmit={handleSubmit}>
        <input type="search" value={valueDefault} onChange={changeCity} />
        <input type="submit" value="Search" />
      </form>
      <div>
        <h3>{city}</h3>
        <p>Wednesday</p>
        <p>10:01pm</p>
        <p>Clouds</p>
        <p>Humidity: 68%</p>
        <p>Wind: 4.02km/h</p>
      </div>
      <div>
        <p>☀️</p>
        <h2>14°C</h2>
      </div>
      <div>
        <p>Fri</p>
        <p>🌤️</p>
        <p>14° 10°</p>
      </div>
    </div>
  );
}
