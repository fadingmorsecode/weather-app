export default function createTemplate() {
  const currentWeather = document.querySelector(".current-weather");
  const forecastWeather = document.querySelector(".forecast-weather");

  const currentContainer = document.createElement("div");
  currentContainer.classList.add("current-container");
  const currentLocation = document.createElement("p");
  currentLocation.classList.add("current-location-text");
  const currentTemp = document.createElement("p");
  currentTemp.classList.add("current-temp-text");
  const currentCondition = document.createElement("p");
  currentCondition.classList.add("current-condition-text");
  const currentRangeContainer = document.createElement("div");
  currentRangeContainer.classList.add("current-range-container");
  const currentHigh = document.createElement("p");
  currentHigh.classList.add("current-high-text");
  const currentLow = document.createElement("p");
  currentLow.classList.add("current-low-text");

  currentLocation.textContent = "Foothill Ranch";
  currentTemp.textContent = "50";
  currentCondition.textContent = "Cloudy";
  currentHigh.textContent = "H:65";
  currentLow.textContent = "L:45";

  currentContainer.appendChild(currentLocation);
  currentContainer.appendChild(currentTemp);
  currentContainer.appendChild(currentCondition);
  currentContainer.appendChild(currentRangeContainer);
  currentRangeContainer.appendChild(currentLow);
  currentRangeContainer.appendChild(currentHigh);
  currentWeather.appendChild(currentContainer);

  (function createForecastDivs() {
    for (let i = 0; i < 3; i++) {
      const forecastContainer = document.createElement("div");
      forecastContainer.classList.add("forecast-container");
      const forecastDate = document.createElement("p");
      forecastDate.classList.add("forecast-date-text");
      forecastDate.textContent = "12/26";
      const forecastTemp = document.createElement("p");
      forecastTemp.classList.add("forecast-temp-text");
      forecastTemp.textContent = "50";
      const forecastCondition = document.createElement("p");
      forecastCondition.classList.add("forecast-condition-text");
      forecastCondition.textContent = "Rainy";
      const forecastRangeContainer = document.createElement("div");
      forecastRangeContainer.classList.add("forecast-range-container");
      const forecastHigh = document.createElement("p");
      forecastHigh.textContent = "H:65";
      const forecastLow = document.createElement("p");
      forecastLow.textContent = "L:45";

      forecastContainer.appendChild(forecastDate);
      forecastContainer.appendChild(forecastTemp);
      forecastContainer.appendChild(forecastCondition);
      forecastContainer.appendChild(forecastRangeContainer);
      forecastRangeContainer.appendChild(forecastHigh);
      forecastRangeContainer.appendChild(forecastLow);
      forecastWeather.appendChild(forecastContainer);
    }
  })();
}
