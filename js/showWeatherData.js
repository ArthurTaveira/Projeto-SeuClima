

import getWeatherData from "./getWeatherData.js"

const apiUnsplash = "https://source.unsplash.com/1600x900/?";

const cityElement = document.querySelector('#city')
const tempElement = document.querySelector('#temperature span')
const descElement = document.querySelector('#description')
const weatherIconElement = document.querySelector('#weather-icon')
const countryElement = document.querySelector('#country')
const humidityElement = document.querySelector('#humidity span')
const windElement = document.querySelector('#wind span')
const weatherContainer=document.querySelector(  '#weather-data')
const sugestionsContainer = document.querySelector('.sugestions')
const cityInput = document.querySelector('#city-input');
const pegaCep = document.querySelector("#cep");
const sugestoes = document.querySelector('#sugestoesBtn')


const showWeatherData = async (city) => {

    const data = await getWeatherData(city)
    
    cityElement.innerHTML = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description
    weatherIconElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    //countryElement.setAttribute('src', `https://www.countryflagicons.com/FLAT/64/${data.sys.country}.png` )
    humidityElement.innerHTML = `${data.main.humidity}%`
    windElement.innerHTML = `${data.wind.speed}Km/h`
    
    weatherContainer.classList.remove( 'hide')

  //  document.body.style.backgroundImage = `url("${apiUnsplash + city}")`;

    sugestionsContainer.classList.add("hide")
    sugestoes.classList.remove("hide")

    // cityInput.value = ' '
    // pegaCep.value = ' '
    

    

}

export default showWeatherData
