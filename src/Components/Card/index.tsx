import * as React from "react";
import Sun from "../../images/001lighticons-02.png";

interface Props {
  forecast: {
    main:{
      temp: number,
      pressure: number,
    }
    wind:{
      speed: number,
    }
  }
  key: number;
}

function Card({ forecast }: Props) {
  return (
    <div className="card">
      <div className="centered-text">Monday</div>
      <img className="weather-icon" src={Sun} alt="sunny" />
      <ul>
        <li>{forecast.main.temp.toFixed(1)}°C</li>
        <li>{forecast.main.pressure.toFixed()} hPa</li>
        <li>{forecast.wind.speed} m/s</li>
      </ul>
    </div>
  );
}

export default Card;
