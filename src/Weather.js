import React from "react";

export default function Weather() {
  return (
    <div>
      <img
        src="https://www.shecodes.io/assets/branding/logo-shecodes-3dfa60aeab8ef361842da5a2b6d46db3af1b7afafefee3dde0a9846389de754b.png"
        alt="Logo"
      />
      <form action="">
        <input type="search" name="" id="" />
        <input type="submit" value="Search" />
      </form>
      <div>
        <h3>Modesto</h3>
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
