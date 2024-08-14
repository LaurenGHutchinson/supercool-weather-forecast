// Importing LocationAPI module
import LocationApi from "./LocationApi.js";
import config from './config.js';

// API-KEY
const myLocationKey = config.WEATHER_KEY;
const myGoogleKey = config.GOOGLE_KEY;

const locationApi = new LocationApi(myLocationKey);

// Gets the Weather Data and display it on the site
async function getCurrentCondition(locationResponse) {
    //const location = await LocationApi.getForecastData();
 

}
// Getting Form Element 
const forecastForm = document.querySelector(".forecast__form");
const dropDownEl = document.getElementById("selectCountry");

async function displayCurrentConditions(location){
    const conditionsResponse = await locationApi.getCurrentConditions(location);
    //console.log(conditionsResponse.[0].WeatherText);


    // const conditionsCard = document.querySelector('.forecast__cards--card');
    // const currentCondition = document.createElement('span');
    // // currentCondition.classList.add('')
    // currentCondition.innerText = conditionsResponse.data.WeatherText;
    // console.log(currentCondition);

    // conditionsCard.appendChild(currentCondition);
}

function listCountryAndAppendToDropdown(locations, locationInput){
    const addedCountries = {};
    dropDownEl.innerHTML = '';
    locations.forEach((location) => {
        const countryName = location.Country.LocalizedName;
        // const cityName = location.
        
    if (location.LocalizedName === locationInput){ 
        if (!addedCountries[countryName]) {
            console.log(countryName);
            const option = document.createElement('option');
            option.innerText = countryName;
            console.log(option);

            dropDownEl.appendChild(option);
            addedCountries[countryName] = true;
        }
    }

    dropDownEl.addEventListener("change", (event) => {
        const selectedCountry = event.target.value;
        if(locationInput === location.LocalizedName && selectedCountry === countryName){
            const locationKey = location.Key;
            displayCurrentConditions(locationKey);
        }
        
    });
    
    
});}



forecastForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const locationInput = event.target.forecastInputLocation.value; 
    const locationResponse = await locationApi.getLocationKey(locationInput);

   
    listCountryAndAppendToDropdown(locationResponse, locationInput);
    
   

   // getCurrentCondition(locationResponse.data);
});



//getForecastData();


