import React, { useState } from "react";
import Fahrenheit from "./FahrenheitInput";
import CelsiusInput from "./CelsiusInput";

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState({
    celsius: "",
    fahrenheit: "",
  });

  // celsius
  const handleCelsius = (value) => {
    const celsius = parseFloat(value) || 0;
    const fahrenheit = (celsius * 9) / 5 + 32;
    setTemperature({
      celsius: value,
      fahrenheit: fahrenheit.toFixed(2),
    });
  };
  // farenheit

  const handlefarenheit = (value) => {
    const farenheit = parseFloat(value) || 0;
    const celsius = ((farenheit - 32) * 5) / 5;
    setTemperature({
      farenheit: value,
      celsius: celsius.toFixed(2),
    });
  };

  return (
    <div className="  min-h-screen flex items-center justify-center bg-[url(san-francisco-1893985_1280.jpg)] bg-center bg-cover">
      <div className="bg-black mx-auto text-white p-4 rounded-md text-center shadow-lg">
        <h1 className=" text-2xl font-bold">Temperature Converter App</h1>
        <CelsiusInput
          celsius={temperature.celsius}
          ontemperaturechange={handleCelsius}
        />
        <Fahrenheit
          fahrenheit={temperature.fahrenheit}
          ontemperaturechange={handlefarenheit}
        />
      </div>
    </div>
  );
};

export default TemperatureConverter;
