// replace city in header text when typed into the search//
let apiKey = "f2b35710c0850e450f427a44t4o3a3cc";
function displayTemperature(response) {
  let temperatureElement = document.querySelector(".current-temp");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;
  let cityElement = document.querySelector("#cityDisplayed");
  cityElement.innerHTML = response.data.city;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;
  searchCity(city);
}

function searchCity(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayTemperature);
}

let form = document.querySelector(".city");
form.addEventListener("submit", search);
//show cuurent time, Date /Time Sunday 5pm/

function displayCurrentDay() {
  let day = days[now.getDay()];
  let dayHeading = document.querySelector("#day");
  dayHeading.innerHTML = `${day}`;
}

function displayCurrentTime() {
  let time = now.getHours();
  let minutes = now.getMinutes();
  let timeHeading = document.querySelector("#time");
  timeHeading.innerHTML = `${time}:${minutes}`;
}

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

displayCurrentDay();
displayCurrentTime();
