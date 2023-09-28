import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./WeatherCard.css";

function WeatherCard(props) {
  return (
    <div className='cardContainer'>
      <div className='cardContainer1'>
        <h2>{props.city}</h2>
        <p>India</p>
        <div className='detailsIcon'>
          <h1><WbSunnyIcon style={{ fontSize: "50px", marginRight: "1rem" }} />{props.temp}&deg;{props.unit === 'metric' ? 'C' : 'F'}</h1>
        </div>
        <select id="unitSelector" onChange={props.onUnitChange} value={props.unit}>
          <option value="metric">Celsius</option>
          <option value="imperial">Fahrenheit</option>
        </select>
      </div>
    </div>
  );
}

export default WeatherCard;
