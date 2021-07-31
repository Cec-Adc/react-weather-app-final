import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              autofocus
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="search-button" />
          </div>
        </div>
      </form>
      <h1>Hamburg</h1>
      <div className="current-temperature">
        <span>24</span>°C
      </div>
      <p className="date-hour">
        Last updated: <span>Monday</span>,<span>17</span>:<span>30</span>
      </p>
      <br />
      <div className="row">
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="main-icon"
            className="main-icon"
            id="icon"
          />
        </div>
        <div className="col-8">
          <p className="description">Clear Sky</p>
          <p className="precipitation">
            Humidity: <span>38</span>%
          </p>
          <p className="wind">
            Wind: <span>4</span> km/h
          </p>
        </div>
      </div>
    </div>
  );
}
