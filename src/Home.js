import React, { useState } from "react";
import "./style.css";
import Search from "./Card/Search";
import WeatherCard from "./Card/WeatherCard";

function Home() {
  const [value, setValue] = useState("");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [unit, setUnit] = useState("metric"); 

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
    fetchApi();
  };

  const fetchApi = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=${unit}&appid=b24982bca818f3dea1c76357d4773f19`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCity(data.name);
        setTemp(data.main.temp);
      } else {
        console.error('Error fetching weather data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="weatherWrapper">
      <div className="header">
        <h1>Weather Web App</h1>
      </div>
      <div className="SearchFilter">
        <Search
          onChange={handleChange}
          value={value}
          onSearch={fetchApi}
          isLoading={isLoading}
        />
      </div>
      <div className="weatherCard">
      {isLoading ? (
  <div className="loadingSpinner">
    <div className="spinner"></div>
  </div>
) : (
  <WeatherCard
    city={city}
    temp={temp}
    unit={unit}
    onUnitChange={handleUnitChange}
  />
)}

      </div>
    </div>
  );
}

export default Home;
