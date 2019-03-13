import * as React from 'react';
import Sun from '../../images/001lighticons-02.png';

interface Props{
  forecast: any
}

function Card({forecast}:Props) {

  return (
      <div className="card">
      <div className="centered-text">Monday
      </div>
      <img className="weather-icon" src={Sun} alt="sunny"/>
      <ul>
        <li>{forecast.main.temp}°C</li>
        <li>{forecast.main.pressure} hPa</li>
        <li>{forecast.wind.speed} m/s</li>
      </ul>
    </div>
  );
}

export default Card;