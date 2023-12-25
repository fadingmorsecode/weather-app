// functions that can take a location and return the weather data for that location

async function getCurrentWeatherData(search) {
  const currentResponse = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=e27d0611824649cba3880002231612&q=${search}&aqi=no`,
    { mode: "cors" },
  );
  const currentWeatherData = await currentResponse.json();
  return currentWeatherData;
}

async function getForecastWeatherData(search) {
  const forecastResponse = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=e27d0611824649cba3880002231612&q=${search}&days=3&aqi=no&alerts=no`,
    { mode: "cors" },
  );
  const forecastWeatherData = await forecastResponse.json();
  return forecastWeatherData;
}

async function processCurrentWeatherData(weatherData) {
  const toFilter = await weatherData;
  const filtered = {
    name: toFilter.location.name,
    country: toFilter.location.country,
    temp_c: toFilter.current.temp_c,
    temp_f: toFilter.current.temp_f,
    condition: toFilter.current.condition.text,
  };
  return filtered;
}

async function processForecastWeatherData(weatherData) {
  const toFilter = await weatherData;
  const filtered = [];
  toFilter.forecast.forecastday.forEach((day) => {
    filtered.push({
      name: toFilter.location.name,
      country: toFilter.location.country,
      date: day.date,
      maxtemp_c: day.day.maxtemp_c,
      maxtemp_f: day.day.maxtemp_f,
      mintemp_c: day.day.mintemp_c,
      mintemp_f: day.day.mintemp_f,
      condition: day.day.condition.text,
    });
  });
  return filtered;
}
