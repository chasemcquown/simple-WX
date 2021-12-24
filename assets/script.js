// get user's city
let cityInput = document.querySelector('#city')
// identify search button 
const searchButton = document.querySelector('#search-btn')
// create array to hold previous searches
let previousSearches = [];
// api key 
const apiKey = "&appid=cf6215d35458f7e05133781f893bec16";

// find city current conditions
function getCurrentWX() {

    // save searched city
    let city = cityInput.value.trim()

    // push searched city into array
    previousSearches.push(city)

    // save array to local storage 
    localStorage.setItem("cities", JSON.stringify(previousSearches))

    // fetch current conditions
    fetch(
        "https://api.openweathermap.org/data/2.5/find?q=" + city + "&units=imperial" + apiKey

    )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        // get current WX data
        let currentTemp = data.list[0].main.temp 
        let currentWind = data.list[0].wind.speed 
        let currentHumidity = data.list[0].main.humidity

        // display current WX data
        document.querySelector('#current-temp').innerHTML = "Temperature: " + currentTemp + " F"
        document.querySelector('#current-wind').innerHTML = "Wind: " + currentWind + "mph"
        document.querySelector('#current-humidity').innerHTML = "Humidity: " + currentHumidity + "%"
        document.querySelector("#recent-search").innerHTML = data.list[0].name

        // create and display button for recent searches
        const buttonContainer = document.querySelector("#previous-searches")
        let newButton = document.createElement("button")
        newButton.id = data.list[0].name
        newButton.innerText = data.list[0].name
        newButton.classList = 'btn btn-secondary'
        buttonContainer.appendChild(newButton)
    });

    // fetch for 5 day forecast
    fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + apiKey
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        // day one data
        let dayOneDate = data.list[4].dt_txt.slice(5,10)
        let dayOneTemp = data.list[4].main.temp
        let dayOneWind = data.list[4].wind.speed
        let dayOneHumidity = data.list[4].main.humidity
        document.querySelector("#day-one-date").innerText = dayOneDate
        document.querySelector("#day-one-temp").innerText = dayOneTemp
        document.querySelector("#day-one-wind").innerText = dayOneWind
        document.querySelector("#day-one-humidity").innerText = dayOneHumidity

        // day two data
        let dayTwoDate = data.list[12].dt_txt.slice(5,10)
        let dayTwoTemp = data.list[12].main.temp
        let dayTwoWind = data.list[12].wind.speed
        let dayTwoHumidity = data.list[12].main.humidity
        document.querySelector("#day-two-date").innerText = dayTwoDate
        document.querySelector("#day-two-temp").innerText = dayTwoTemp
        document.querySelector("#day-two-wind").innerText = dayTwoWind
        document.querySelector("#day-two-humidity").innerText = dayTwoHumidity

        // day three data
        let dayThreeDate = data.list[20].dt_txt.slice(5,10)
        let dayThreeTemp = data.list[20].main.temp
        let dayThreeWind = data.list[20].wind.speed
        let dayThreeHumidity = data.list[20].main.humidity
        document.querySelector("#day-three-date").innerText = dayThreeDate
        document.querySelector("#day-three-temp").innerText = dayThreeTemp
        document.querySelector("#day-three-wind").innerText = dayThreeWind
        document.querySelector("#day-three-humidity").innerText = dayThreeHumidity

        // day four data
        let dayFourDate = data.list[28].dt_txt.slice(5,10)
        let dayFourTemp = data.list[28].main.temp
        let dayFourWind = data.list[28].wind.speed
        let dayFourHumidity = data.list[28].main.humidity
        document.querySelector("#day-four-date").innerText = dayFourDate
        document.querySelector("#day-four-temp").innerText = dayFourTemp
        document.querySelector("#day-four-wind").innerText = dayFourWind
        document.querySelector("#day-four-humidity").innerText = dayFourHumidity

        // day five data
        let dayFiveDate = data.list[32].dt_txt.slice(5,10)
        let dayFiveTemp = data.list[32].main.temp
        let dayFiveWind = data.list[32].wind.speed
        let dayFiveHumidity = data.list[32].main.humidity
        document.querySelector("#day-five-date").innerText = dayFiveDate
        document.querySelector("#day-five-temp").innerText = dayFiveTemp
        document.querySelector("#day-five-wind").innerText = dayFiveWind
        document.querySelector("#day-five-humidity").innerText = dayFiveHumidity
    })

}


// find city once button has been clicked
searchButton.addEventListener('click', getCurrentWX)