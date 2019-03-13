import * as React from 'react';
import Sun from '../../images/001lighticons-02.png';

function Card() {
  return (
    <div className="card">
      <div className="centered-text">Monday
      </div>
      <img className="weather-icon" src={Sun} alt="sunny"/>
      <ul>
        <li>23°C</li>
        <li>1000 hPa</li>
        <li>12.3 m/s</li>
      </ul>
    </div>
  );
}

export default Card;