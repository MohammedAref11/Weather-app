import { dataBasic, geoReverse } from "./api.js";

const cityInput = document.getElementById("cityInput"); 
// basic data
const dateEl = document.getElementById("dateEl"); 
const tempEl = document.getElementById("tempEl"); 
const countryEl = document.getElementById("countryEl"); 
const weatherIcon = document.getElementById("weatherIcon"); 
// more info
const feelsLike = document.getElementById("feelsLike"); 
const humidity = document.getElementById("humidity"); 
const wind = document.getElementById("wind"); 
const precipitation = document.getElementById("precipitation"); 

async function renderBasic(cityName) {
    const data = await dataBasic(cityName);
    const reagionName = new Intl.DisplayNames(["en"], {type: "region"});
    const date = new Date().toLocaleDateString('en', { weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"});
    dateEl.textContent = date; 
    tempEl.textContent = `${data.main.temp.toFixed(0)}°`; 
    countryEl.textContent = `${data.name}, ${reagionName.of(data.sys.country)}`; 
    weatherIcon.src = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`
    weatherIcon.style.display = "block"
}

cityInput.addEventListener("keydown", (e) => { 
    if (e.key === "Enter") { 
        renderBasic(e.target.value)
        renderMoreInfo(e.target.value)
    }
})

async function renderMoreInfo(cityName) { 
    const data = await dataBasic(cityName); 
    feelsLike.textContent = `${data.main.feels_like.toFixed(0)}°`;
    humidity.textContent = `${data.main.humidity}%`; 
    wind.textContent = `${(data.wind.speed * 3.6).toFixed(0)} km/h`
    console.log(data.wind.speed)
    console.log(data)
}


async function userLocation(location) { 
    console.log(location.coords)
    const loc = await geoReverse(location.coords.latitude, location.coords.longitude)
    renderBasic(loc[0].name)
    renderMoreInfo(loc[0].name)
}

function locationError(error) { 
    tempEl.textContent = `Unable to get user location wait couple seconds before refreshing`
    weatherIcon.style.display = "none"
}

navigator.geolocation.getCurrentPosition(userLocation, locationError);
