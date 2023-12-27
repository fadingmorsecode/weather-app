export default function createTemplate() {
  const currentWeather = document.querySelector(".current-weather");
  const forecastWeather = document.querySelector(".forecast-weather");

  const currentContainer = document.createElement("div");
  currentContainer.classList.add("current-container");
  const currentLocation = document.createElement("p");
  currentLocation.classList.add("current-location-text");
  const currentCountry = document.createElement("p");
  currentCountry.classList.add("current-country-text");
  const currentTemp = document.createElement("p");
  currentTemp.classList.add("current-temp-text");
  const currentCondition = document.createElement("p");
  currentCondition.classList.add("current-condition-text");

  currentContainer.appendChild(currentLocation);
  currentContainer.appendChild(currentCountry);
  currentContainer.appendChild(currentTemp);
  currentContainer.appendChild(currentCondition);
  currentWeather.appendChild(currentContainer);

  (function createForecastDivs() {
    for (let i = 0; i < 3; i++) {
      const forecastContainer = document.createElement("div");
      forecastContainer.classList.add("forecast-container");
      const forecastDate = document.createElement("p");
      forecastDate.classList.add("forecast-date-text");
      const forecastCondition = document.createElement("p");
      forecastCondition.classList.add("forecast-condition-text");
      const forecastRangeContainer = document.createElement("div");
      forecastRangeContainer.classList.add("forecast-range-container");
      const forecastHigh = document.createElement("p");
      const forecastLow = document.createElement("p");

      forecastContainer.appendChild(forecastDate);
      forecastContainer.appendChild(forecastCondition);
      forecastContainer.appendChild(forecastRangeContainer);
      forecastRangeContainer.appendChild(forecastHigh);
      forecastRangeContainer.appendChild(forecastLow);
      forecastWeather.appendChild(forecastContainer);
    }
  })();
}
