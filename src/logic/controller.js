import { getCurrentWeatherData } from "./weatherdata";
import { getForecastWeatherData } from "./weatherdata";
import { processCurrentWeatherData } from "./weatherdata";
import { processForecastWeatherData } from "./weatherdata";

const form = document.querySelector("form");
const input = document.querySelector("input");

async function retrieveAllWeatherData(searchValue) {
  const currentWeatherData = await processCurrentWeatherData(
    getCurrentWeatherData(searchValue),
  );
  console.log(currentWeatherData);
  const forecastWeatherData = await processForecastWeatherData(
    getForecastWeatherData(searchValue),
  );
  console.log(forecastWeatherData);
}

function getSearchValue(e) {
  if (e.target.matches("#search-btn")) {
    e.preventDefault();
    const toSearch = input.value;
    retrieveAllWeatherData(toSearch);
  }
}
export default function loadSearchListener() {
  document.addEventListener("click", getSearchValue);
}
