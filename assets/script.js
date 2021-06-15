// identify search button
var searchBtn = document.querySelector("#search-btn");

// store the city that the user is searching for in a variable
var usersCity = document.querySelector("#city");

// this is where the forecast will be generated and displayed to webpage
var generateForecast = function() {
    var city = usersCity.value.trim();
    alert("You searched for " + city); 
};


// listen for click on search button, then do something--generateForecast()--once button is clicked.
searchBtn.addEventListener("click", generateForecast);