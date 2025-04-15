import React, { useState } from "react";
import Moment from "./Moment";

export default function CurrentWeather({ weatherInfo }) {
  const [unit, setUnit] = useState("celsius");

  let convertFahrenheit = (weatherInfo.unit * 9) / 5 + 32;

  function changeFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function changeCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="CurrentDescription">
        <div className="WeatherTemp">
          <img src={weatherInfo.icon} alt="" className="MainWeatherIcon" />
          <div className="DegreeContainer">
            <h2 className="CurrentDegree">{weatherInfo.unit}</h2>
            <p className="Unit">°C | </p>
            <a href="/" className="Unit" onClick={changeFahrenheit}>
              °F
            </a>
          </div>
        </div>
        <div className="WeatherDescription">
          <h3>{weatherInfo.city}</h3>
          <div className="Container">
            <Moment />
            <p>{weatherInfo.time}</p>
            <p>Humidity: {weatherInfo.humidity}%</p>
            <p>Wind: {weatherInfo.wind}km/h</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CurrentDescription">
        <div className="WeatherTemp">
          <img src={weatherInfo.icon} alt="" className="MainWeatherIcon" />
          <div className="DegreeContainer">
            <h2 className="CurrentDegree">{convertFahrenheit}</h2>
            <a href="/" className="Unit" onClick={changeCelsius}>
              °C |
            </a>
            <p className="UnitF">°F</p>
          </div>
        </div>
        <div className="WeatherDescription">
          <h3>{weatherInfo.city}</h3>
          <div className="Container">
            <Moment />
            <p>{weatherInfo.time}</p>
            <p>Humidity: {weatherInfo.humidity}%</p>
            <p>Wind: {weatherInfo.wind}km/h</p>
          </div>
        </div>
      </div>
    );
  }
}
