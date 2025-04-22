import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast({ forecastCity, unit }) {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    if (forecastCity) {
      let apiKey = "eac360db5fc86ft86450f3693e73o43f";
      let api = `https://api.shecodes.io/weather/v1/forecast?query=${forecastCity}&key=${apiKey}&units=metric`;
      axios.get(api).then(fetchForcast);
    }
  }, [forecastCity]);

  function fetchForcast(response) {
    console.log(response.data);
    setForecast(response.data.daily.slice(0, 5));
  }

  function formatDay(timestamp) {
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
      weekday: "short",
    });
  }

  function displayTemperature(max, min) {
    if (unit === "fahrenheit") {
      max = (max * 9) / 5 + 32;
      min = (min * 9) / 5 + 32;
      return `${Math.round(max)}°F / ${Math.round(min)}°F`;
    } else {
      return `${Math.round(max)}°C / ${Math.round(min)}°C`;
    }
  }

  return (
    <div className="Forecast">
      {forecast.length > 0 ? (
        forecast.map((day, index) => (
          <div className="FiveDayForecast" key={index}>
            <p className="ForecastDay">{formatDay(day.time)}</p>
            <p className="ForecastTemp">
              {displayTemperature(
                day.temperature.maximum,
                day.temperature.minimum
              )}
            </p>
            <img src={day.condition.icon_url} alt={day.condition.description} />
          </div>
        ))
      ) : (
        <p>Loading forecast...</p>
      )}
    </div>
  );
}
