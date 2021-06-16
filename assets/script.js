// identify search button
var searchBtn = document.querySelector("#search-btn");

// identify input element
var usersCity = document.querySelector("#city");

// identify button container
var buttonContainer = document.querySelector("#button-container");

// this is where the forecast will be generated and displayed to webpage
var getCity = function() {




    // store the city that the user is searching for in a variable
    var city = usersCity.value.trim();

    // append button to container that holds user's searched city
    var cityButton = document.createElement("button");
    cityButton.innerHTML = city;
    cityButton.classList = "btn btn-primary city-button";
    buttonContainer.appendChild(cityButton);

    // api key 
    var apiKey = "&appid=cf6215d35458f7e05133781f893bec16";

    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey
    ).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });

    
    // dynamically generate button and add to card that will have inner html = the city that the user searched for

    // dynamically generate a container to the right of card that will display cities name and date, current temp below that, wind speed below that, humifity below that, and uv index below that

    // dynamically generate a new container that has 5 cards displayed horizontally. The cards will contain date, temp, wind, and humidity

};


// listen for click on search button, then do something--getCity()--once button is clicked.
searchBtn.addEventListener("click", getCity);