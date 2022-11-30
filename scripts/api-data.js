async function getWeather(latitude, longitude){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=es&units=metric`)
    const data = response.json()
    return data
}