const API_KEY = '03a17b7c9ecf18f15cac5b10e1f35e74'

const accessLocation = document.getElementById('btn__location')

let sectionLocation = document.getElementById('location')
let sectionInformation = document.getElementById('information')
sectionInformation.style.display = 'none'
let getCountry = document.getElementById('place__country')
let getCity = document.getElementById('place__city')
let environmentTemperature = document.getElementById('environment__temperature')
let environmentSky = document.getElementById('environment__sky')

accessLocation.addEventListener('click',()=>{
    sectionLocation.style.display = 'none'
    sectionInformation.style.display = 'flex'
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position => {
            let latitude = position.coords.latitude
            let longitude = position.coords.longitude
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=es&units=metric`)
                .then( response => { return response.json() })
                .then ( data => {
                    console.log(data)
                    let temperature = data.main.temp
                    environmentTemperature.textContent = `${temperature} °C`
                    let country = data.sys.country
                    getCountry.textContent = `${country} Banderita`
                    let city = data.name
                    getCity.textContent = `${city} Banderita`
                })
        })
    }
})

