const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const weatherContainer = document.getElementById("weatherContainer");

searchBtn.addEventListener("click", searchWeather);
searchInput.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    searchWeather()
  }
});

function searchWeather() {
  const query = searchInput.value.trim();

  // Clear previous weather data
  weatherContainer.innerHTML = "";

  if (query !== "") {
    // Fetch weather data from OpenWeatherMap API
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query},Indonesia&appid=5d117fd7c3a52cd4771f688837e10363`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === "404") {
          weatherContainer.innerHTML = "Mountain not found.";
        } else {
          console.log(data);
          const weatherInfo = `
            <h3>Weather in ${data.name}</h3>
            <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
            <p>Description: ${data.weather[0].description}</p>
          `;
          weatherContainer.innerHTML = weatherInfo;
        }
      })
      .catch((error) => {
        weatherContainer.innerHTML =
          "An error occurred while fetching weather data.";
        console.error(error);
      });
  }
}
