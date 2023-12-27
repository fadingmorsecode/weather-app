import { getCurrentWeatherData } from "./weatherdata";
import { getForecastWeatherData } from "./weatherdata";
import { processCurrentWeatherData } from "./weatherdata";
import { processForecastWeatherData } from "./weatherdata";
import createTemplate from "../dom/template.js";
import deleteTemplate from "../dom/templatedeletion.js";
import getCurrentUnit from "./temperatureunit.js";

const input = document.querySelector("#search-input");
const currentWeatherParent = document.querySelector(".current-weather");
const forecastWeatherParent = document.querySelector(".forecast-weather");

let storedWeather = [];

function storeTemplateData(currentWeatherData, forecastWeatherData) {
  storedWeather[0] = currentWeatherData;
  storedWeather[1] = forecastWeatherData;
}

function renderTemplate() {
  deleteTemplate(); // delete any existing template
  createTemplate();
}

function appendTemplateData(currentData, forecastData) {
  const currentUnit = getCurrentUnit();

  const currentLocation = document.querySelector(".current-location-text");
  const currentCountry = document.querySelector(".current-country-text");
  const currentTemp = document.querySelector(".current-temp-text");
  const currentCondition = document.querySelector(".current-condition-text");
  currentLocation.textContent = currentData.name;
  currentCountry.textContent = currentData.country;
  currentTemp.textContent = currentData[`temp_${currentUnit}`];
  currentCondition.textContent = currentData.condition;

  const forecastContianers = document.querySelectorAll(".forecast-container");
  const forecastArray = Array.from(forecastContianers);
  for (let i = 0; i < forecastArray.length; i++) {
    forecastArray[i].children[0].textContent = forecastData[i].date;
    forecastArray[i].childNodes[1].textContent = forecastData[i].condition;
    forecastArray[i].childNodes[2].childNodes[0].textContent = `Low: ${
      forecastData[i][`mintemp_${currentUnit}`]
    }`;
    forecastArray[i].childNodes[2].childNodes[1].textContent = `High: ${
      forecastData[i][`maxtemp_${currentUnit}`]
    }`;
  }
}

async function retrieveAllWeatherData(searchValue) {
  const currentWeatherData = await processCurrentWeatherData(
    getCurrentWeatherData(searchValue),
  );
  const forecastWeatherData = await processForecastWeatherData(
    getForecastWeatherData(searchValue),
  );
  renderTemplate();
  appendTemplateData(currentWeatherData, forecastWeatherData);
  storeTemplateData(currentWeatherData, forecastWeatherData);
}

function inputAction(e) {
  if (e.target.matches("#search-btn")) {
    e.preventDefault();
    const toSearch = input.value;
    retrieveAllWeatherData(toSearch);
  } else if (
    e.target.matches('input[type = "checkbox"]') &&
    currentWeatherParent.firstChild &&
    forecastWeatherParent.firstChild
  ) {
    renderTemplate();
    appendTemplateData(storedWeather[0], storedWeather[1]);
  }
}
export default function loadDelegation() {
  document.addEventListener("click", inputAction);
}
