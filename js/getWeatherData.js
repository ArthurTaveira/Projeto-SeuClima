

const apiKey = 'ea2c65c6d89f312a88df9c99848aa28b';


//funcao sincrona para chamada de api WeatherData

const getWeatherData = async (city) => {

    //colocando ap Weather Data dentro de uma const, alterando a cidade recebida e a chave da api
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    
    //chamando a api por fetch 
    const res = await fetch(apiWeatherURL)

    //convertendo para json
    const data = await res.json()

    //retornando uma conntate como um objeto contendo as informaçãos da cidade requerida
    return data
    
}

export default getWeatherData

