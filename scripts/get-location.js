const API_KEY = '03a17b7c9ecf18f15cac5b10e1f35e74'
// const $ = (id) => document.querySelector(id)

const accessLocation = document.getElementsByClassName('location__button')[0]

// sacado de internet ⬇⬇⬇⬇: because: la API del clima requiere la unicación.

// const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
// };

// function success(pos) {
//     const crd = pos.coords;
//     console.log('Tu ubicación actual es:');
//     console.log(`Latitud : ${crd.latitude}`);
//     console.log(`Longitud: ${crd.longitude}`);
//     console.log(`Más o menos ${crd.accuracy} metros.`);
//     console.log( getWeather(crd.latitude, crd.longitude))
// }

// function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// accessLocation.addEventListener('click',()=>{
//     navigator.geolocation.getCurrentPosition(success, error, options);
// })
accessLocation.addEventListener('click',()=>{
    let longitude
    let latitude
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position => {
            latitude = position.coords.latitude
            longitude = position.coords.longitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=es&units=metric`

            console.log(url)
        })
    }
})
