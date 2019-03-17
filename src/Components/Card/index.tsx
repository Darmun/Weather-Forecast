import * as React from "react";

export interface Props {
  forecast: {
    weather: Array<{
      description: string;
      icon: string;
    }>;
    main: {
      temp: number;
      pressure: number;
    };
    wind: {
      speed: number;
    };
  };
  key: number;
}

function Card({ forecast }: Props) {
  return (
    <div className="card">
      <div className="centered-text">Monday</div>
      <img
        className="weather-icon"
        src={iconGenerator(forecast.weather[0].icon)}
        alt={forecast.weather[0].description}
      />
      <ul>
        <li>{forecast.main.temp.toFixed(1)}°C</li>
        <li>{forecast.main.pressure.toFixed()} hPa</li>
        <li>{forecast.wind.speed} m/s</li>
      </ul>
    </div>
  );
}

function iconGenerator(weatherCode: string) {
  console.log(weatherCode);
  return `http://openweathermap.org/img/w/${weatherCode}.png`;
}

export default Card;
