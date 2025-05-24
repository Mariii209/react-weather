import React, { useState } from "react";
import "./TemperatureToggle.css";

export default function TemperatureToggle({ unit, setUnit }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleUnitChange = (newUnit) => {
    if (newUnit !== unit) {
      setUnit(newUnit);
    }
    setIsOpen(false);
  };
  return (
    <div className="TemperatureToggle">
      <div className="ToggleContainer">
        <div className="ToggleTemp" onClick={toggleMenu}>
          <i class="fa-solid fa-ellipsis-vertical ToggleIcon"></i>
        </div>
      </div>
      {isOpen && (
        <div className="HamburgerMenu">
          <ul className="UnitOptions">
            <li
              className={`UnitOption ${unit === "fahrenheit" ? "active" : ""}`}
              onClick={() => handleUnitChange("fahrenheit")}
            >
              <span className="UnitLabel">Fahrenheit</span>
              <span className="UnitSymbol">°F</span>
            </li>
            <hr />
            <li
              className={`UnitOption ${unit === "celsius" ? "active" : ""}`}
              onClick={() => handleUnitChange("celsius")}
            >
              <span className="UnitLabel">Celsius</span>
              <span className="UnitSymbol">°C</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
