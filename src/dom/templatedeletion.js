export default function deleteTemplate() {
  const currentWeather = document.querySelector(".current-weather");
  const forecastWeather = document.querySelector(".forecast-weather");

  while (currentWeather.firstChild) {
    currentWeather.removeChild(currentWeather.lastChild);
  }

  while (forecastWeather.firstChild) {
    forecastWeather.removeChild(forecastWeather.lastChild);
  }
}
