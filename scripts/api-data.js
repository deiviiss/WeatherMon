async function getWeather(latitude, longitude, forecast=false){

    const response = await fetch(`https://api.openweathermap.org/data/2.5/${forecast?'forecast':'weather'}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=es&units=metric`)
    const data = response.json()
    return data
}

function srcImageMon(id){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}