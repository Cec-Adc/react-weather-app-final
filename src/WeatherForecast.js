import React from "react";
import WeatherIcons from "./WeatherIcons";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  const apiKey = "2d28dad272ae6560bc7be5816c6e997c";
  let latitude = props.coord.lat;
  let longitude = props.coord.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="card card-next-days">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div className="WeatherForecast-day mb-1">Mon</div>
              <WeatherIcons code="01d" size={28} />
              <div className="WeatherForecast-temperatures mt-1">
                <span className="WeatherForecast-temperature-min">10°</span> -{" "}
                <span className="WeatherForecast-temperature-max">
                  <strong>20°</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
