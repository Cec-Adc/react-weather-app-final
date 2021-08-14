import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temp.max);
    return `${maxTemperature}°`;
  }

  function minTemperature() {
    let minTemperature = Math.round(props.data.temp.min);
    return `${minTemperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day mb-2">{day()}</div>
      <WeatherIcons code={props.data.weather[0].icon} size={28} />
      <div className="WeatherForecast-temperatures mt-1">
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>{" "}
        -{" "}
        <span className="WeatherForecast-temperature-max">
          <strong>{maxTemperature()}</strong>
        </span>
      </div>
    </div>
  );
}
