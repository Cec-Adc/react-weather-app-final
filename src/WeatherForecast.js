import React, { useState } from "react";
import WeatherIcons from "./WeatherIcons";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="card card-next-days">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <div className="WeatherForecast-day mb-1">{forecast[0].dt}</div>
                <WeatherIcons code={forecast[0].weather[0].icon} size={28} />
                <div className="WeatherForecast-temperatures mt-1">
                  <span className="WeatherForecast-temperature-min">
                    {forecast[0].temp.min}°
                  </span>{" "}
                  -{" "}
                  <span className="WeatherForecast-temperature-max">
                    <strong>{forecast[0].temp.max}°</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2d28dad272ae6560bc7be5816c6e997c";
    let latitude = props.coord.lat;
    let longitude = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
