import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    if (props.forecastCity) {
      let apiKey = "eac360db5fc86ft86450f3693e73o43f";
      let api = `https://api.shecodes.io/weather/v1/forecast?query=${props.forecastCity}&key=${apiKey}&units=metric`;
      axios.get(api).then(fetchForcast);
    }
  }, [props.forecastCity]);

  function fetchForcast(response) {
    console.log(response.data);
    setForecast(response.data.daily.slice(0, 5));
  }
  return (
    <div className="Forecast">
      {forecast.length > 0 ? (
        forecast.map((day, index) => (
          <div className="FiveDayForecast" key={index}>
            <p className="ForecastDay">
              {new Date(day.time * 1000).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <p className="ForecastTemp">
              {Math.round(day.temperature.maximum)}°C /{" "}
              {Math.round(day.temperature.minimum)}°C
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
