import * as React from "react";

interface weather{
      description: string;
      icon: string;
}
export interface Props {
  forecast: {
    weather: Array<weather>;
    main: {
      temp: number;
      pressure: number;
    };
    wind: {
      speed: number;
    };
  };
  key: number;
  day: any;
}

function Card({forecast,day}: Props) {
  return (
    <div className="card">
      <div className="centered-text">{day}</div>
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
  return `http://openweathermap.org/img/w/${weatherCode}.png`;
}

export default Card;
