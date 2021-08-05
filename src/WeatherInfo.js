import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="current-temperature">
        <span>{Math.round(props.data.temperature)}</span>°C
      </div>
      <p className="date-hour">
        <FormattedDate date={props.data.date} />
      </p>
      <br />
      <div className="row">
        <div className="col-4">
          <img
            src={props.data.iconUrl}
            alt="main-icon"
            className="main-icon"
            id="icon"
          />
        </div>
        <div className="col-8">
          <p className="description">{props.data.description}</p>
          <p className="precipitation">
            Humidity: <span>{props.data.humidity}</span>%
          </p>
          <p className="wind">
            Wind: <span>{Math.round(props.data.wind)}</span> km/h
          </p>
        </div>
      </div>
    </div>
  );
}
