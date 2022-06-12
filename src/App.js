import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="Weather App">
      <div className="container">
        <Weather defaultCity="Mey" />
      </div>
      <footer className="mt-4">
        <a
          href="https://github.com/Cec-Adc/react-weather-app-final"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced project
        </a>{" "}
        by Cécile
      </footer>
    </div>
  );
}
