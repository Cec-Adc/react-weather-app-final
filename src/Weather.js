import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      date: "Monday, 17:30",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city"
                autoFocus="on"
                autoComplete="off"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="search-button" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <div className="current-temperature">
          <span>{Math.round(weatherData.temperature)}</span>°C
        </div>
        <p className="date-hour">Last updated: {weatherData.date}</p>
        <br />
        <div className="row">
          <div className="col-4">
            <img
              src={weatherData.iconUrl}
              alt="main-icon"
              className="main-icon"
              id="icon"
            />
          </div>
          <div className="col-8">
            <p className="description">{weatherData.description}</p>
            <p className="precipitation">
              Humidity: <span>{weatherData.humidity}</span>%
            </p>
            <p className="wind">
              Wind: <span>{weatherData.wind}</span> km/h
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2d28dad272ae6560bc7be5816c6e997c";
    let city = "Hamburg";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
