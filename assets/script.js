// identify search button
var searchBtn = document.querySelector("#search-btn");

// identify input element
var usersCity = document.querySelector("#city");

// identify button container
var buttonContainer = document.querySelector("#button-container");

// identify city input element
var inputEl = document.querySelector("#city");

// identify current weather conditions container
var conditionsContainer = document.querySelector("#conditions-container");

// identify city name container
var cityNameHeading = document.querySelector("#city-search");

// identify current temp container
var currentTempText = document.querySelector("#current-temp");

var currentWindText = document.querySelector("#current-wind");

var currentHumidityText = document.querySelector("#current-humidity");

var cityButton = "";

// api key 
var apiKey = "&appid=cf6215d35458f7e05133781f893bec16";


// this is where the forecast will be generated and displayed to webpage
var getCity = function() {


    // store the city that the user is searching for in a variable
    var city = usersCity.value.trim();
    
    // append button to container that holds user's searched city
    cityButton = document.createElement("button");
    cityButton.innerHTML = city;
    cityButton.classList = "btn btn-secondary found-city";
    var newLine = document.createElement("br")
    buttonContainer.appendChild(newLine);
    buttonContainer.appendChild(cityButton);

    // save user's city to local storage 
    localStorage.setItem("searchedCity", city); 


    // fetch for current conditions
    fetch(
       "https://api.openweathermap.org/data/2.5/find?q=" + city + "&units=imperial" + apiKey
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var searchedCity = data.list[0].name
        var currentTemp = data.list[0].main.temp
        var currentWindSpeed = data.list[0].wind.speed
        var currentHumidity = data.list[0].main.humidity
        
        cityNameHeading.innerHTML = searchedCity
        currentTempText.innerHTML = "Temp: " + currentTemp + " F"
        currentWindText.innerHTML = "Wind: " + currentWindSpeed + " MPH"
        currentHumidityText.innerHTML = "Humidity: " + currentHumidity + "%" 
    });

    // fetch for 5 day forecast
    fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + apiKey
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        
        // get day one forecast data
        var dayOne = data.list[0].dt_txt.slice(5,10);
        var dateContainer = document.querySelector("#day-one-date");
        dateContainer.innerHTML = "Date: " + dayOne;
        var dayOneTemp = data.list[0].main.temp
        var tempOneContainer = document.querySelector("#day-one-temp")
        tempOneContainer.innerHTML = "Temp: " + dayOneTemp + " F"
        var dayOneWind = data.list[0].wind.speed 
        var windOneContainer = document.querySelector("#day-one-wind")
        windOneContainer.innerHTML = "Wind: " + dayOneWind + " MPH"
        var dayOneHumidity = data.list[0].main.humidity
        var oneHumidityContainer = document.querySelector("#day-one-humidity")
        oneHumidityContainer.innerHTML = "Humidity: " + dayOneHumidity + "%"

        // get day two forecast data
        var dayTwo = data.list[8].dt_txt.slice(5,10)
        var dateTwoContainer = document.querySelector("#day-two-date");
        dateTwoContainer.innerHTML = "Date: " + dayTwo;
        var dayTwoTemp = data.list[8].main.temp
        var tempTwoContainer = document.querySelector("#day-two-temp")
        tempTwoContainer.innerHTML = "Temp: " + dayTwoTemp + " F"
        var dayTwoWind = data.list[8].wind.speed 
        var windTwoContainer = document.querySelector("#day-two-wind")
        windTwoContainer.innerHTML = "Wind: " + dayTwoWind+ " MPH"
        var dayTwoHumidity = data.list[8].main.humidity
        var humidityTwoContainer = document.querySelector("#day-two-humidity")
        humidityTwoContainer.innerHTML = "Humidity: " + dayTwoHumidity + "%"

        // get day three forecast data
        var dayThree = data.list[16].dt_txt.slice(5,10)
        var dateThreeContainer = document.querySelector("#day-three-date");
        dateThreeContainer.innerHTML = "Date: " + dayThree;
        var dayThreeTemp = data.list[16].main.temp
        var tempThreeContainer = document.querySelector("#day-three-temp")
        tempThreeContainer.innerHTML = "Temp: " + dayThreeTemp + " F"
        var dayThreeWind = data.list[16].wind.speed 
        var windThreeContainer = document.querySelector("#day-three-wind")
        windThreeContainer.innerHTML = "Wind: " + dayThreeWind+ " MPH"
        var dayThreeHumidity = data.list[16].main.humidity
        var humidityThreeContainer = document.querySelector("#day-three-humidity")
        humidityThreeContainer.innerHTML = "Humidity: " + dayThreeHumidity + "%"

        // get day four forecast data
        var dayFour = data.list[24].dt_txt.slice(5,10)
        var dateFourContainer = document.querySelector("#day-four-date");
        dateFourContainer.innerHTML = "Date: " + dayFour;
        var dayFourTemp = data.list[24].main.temp
        var tempFourContainer = document.querySelector("#day-four-temp")
        tempFourContainer.innerHTML = "Temp: " + dayFourTemp + " F"
        var dayFourWind = data.list[24].wind.speed 
        var windFourContainer = document.querySelector("#day-four-wind")
        windFourContainer.innerHTML = "Wind: " + dayFourWind+ " MPH"
        var dayFourHumidity = data.list[24].main.humidity
        var humidityFourContainer = document.querySelector("#day-four-humidity")
        humidityFourContainer.innerHTML = "Humidity: " + dayFourHumidity + "%"

        // get day five forecast data
        var dayFive = data.list[32].dt_txt.slice(5,10)
        var dateFiveContainer = document.querySelector("#day-five-date");
        dateFiveContainer.innerHTML = "Date: " + dayFive;
        var dayFiveTemp = data.list[32].main.temp
        var tempFiveContainer = document.querySelector("#day-five-temp")
        tempFiveContainer.innerHTML = "Temp: " + dayFiveTemp + " F"
        var dayFiveWind = data.list[32].wind.speed 
        var windFiveContainer = document.querySelector("#day-five-wind")
        windFiveContainer.innerHTML = "Wind: " + dayFiveWind+ " MPH"
        var dayFiveHumidity = data.list[32].main.humidity
        var humidityFiveContainer = document.querySelector("#day-five-humidity")
        humidityFiveContainer.innerHTML = "Humidity: " + dayFiveHumidity + "%"

        

    })

    // empty out city input
    inputEl.value = " ";


};

// retrieve users city from local storage
var savedCity = localStorage.getItem("searchedCity");
console.log(savedCity);

// create button with saved city
function displaySavedCity() {
     
    if(savedCity) {
        var savedCityButton = document.createElement("button");
        savedCityButton.classList = "btn btn-secondary";
        savedCityButton.innerHTML = savedCity;
        buttonContainer.appendChild(savedCityButton);
    }

}

// call displaySavedCity
displaySavedCity();
 
// listen for click on search button, then do something--getCity()--once button is clicked.
searchBtn.addEventListener("click", getCity);








