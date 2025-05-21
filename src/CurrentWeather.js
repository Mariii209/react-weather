import React from "react";
import Moment from "./Moment";
import "./CurrentWeather.css";

export default function CurrentWeather({ weatherInfo, unit }) {
  const temperature =
    unit === "celsius"
      ? Math.round(weatherInfo.temperature)
      : Math.round((weatherInfo.temperature * 9) / 5 + 32);

  return (
    <div className="CurrentDescription">
      <h3 className="ResponsiveCity">{weatherInfo.city}</h3>
      <span className="Description">{weatherInfo.description}</span>
      <div className="WeatherTemp">
        <img src={weatherInfo.icon} alt="" className="MainWeatherIcon" />
        <div className="DegreeContainer">
          <h2 className="CurrentDegree">{temperature}</h2>
          <div className="DegreeSymbol">°</div>
        </div>
      </div>
      <div className="WeatherDescription">
        <h3 className="CityName">{weatherInfo.city}</h3>
        <div className="Container">
          <Moment />
          <p className="LocalTime">{weatherInfo.time}</p>
          <p className="CityHumidity">Humidity: {weatherInfo.humidity}%</p>
          <p className="CityWind">Wind: {weatherInfo.wind}km/h</p>
        </div>
      </div>
    </div>
  );
}
