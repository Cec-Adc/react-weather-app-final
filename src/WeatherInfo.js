import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <p className="date-hour">
        <FormattedDate date={props.data.date} />
      </p>
      <br />
      <div className="row">
        <div className="col-sm-2">
          <WeatherIcons code={props.data.icon} size={48} />
        </div>
        <div className="col-sm-3">
          <div className="current-temperature">
            <span>{Math.round(props.data.temperature)}</span>
            <span className="units"> °C</span>
          </div>
        </div>
        <div className="col-sm-7 mb-3">
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
