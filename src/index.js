//Feature #1

let now = new Date();
let currentHour = now.getHours();
let currentMinutes = now.getMinutes();
let days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
let currentDay = days[now.getDay()];
let currentDateTime = `${currentDay}, ${currentHour}:${currentMinutes}`;

let currentTimestamp = document.getElementById("currentCityTime");
currentTimestamp.innerHTML = currentDateTime;

//Feature #2

function searchResult(event) {
	event.preventDefault();
	let cityElement = document.querySelector("#currentCity");
	let cityInput = document.querySelector("#search");
	cityElement.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", searchResult);

//Feature #3

let temperature = 25;
let celsiusTemp = Math.round(temperature);
let fahrenheitTemp = Math.round((temperature * 9) / 5 + 32);

function convertToFahrenheit(event) {
	event.preventDefault();
	let temperatureElement = document.querySelector("#temperature");
	temperatureElement.innerHTML = fahrenheitTemp;
}

function convertToCelsius(event) {
	event.preventDefault();
	let temperatureElement = document.querySelector("#temperature");
	temperatureElement.innerHTML = celsiusTemp;
}

var fahrenheitLink = document.querySelector("#currentFahreinheit");
fahrenheitLink.addEventListener("click", convertToFahrenheit);
var celsiusLink = document.querySelector("#currentCelsius");
celsiusLink.addEventListener("click", convertToCelsius);
