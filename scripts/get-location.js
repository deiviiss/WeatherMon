const API_KEY = '03a17b7c9ecf18f15cac5b10e1f35e74'
// const $ = (id) => document.querySelector(id)

const accessLocation = document.getElementsByClassName('location__button')[0]

accessLocation.addEventListener('click',()=>{
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position => {
            let latitude = position.coords.latitude
            let longitude = position.coords.longitude
            const data = getWeather(latitude, longitude)
            console.log(data);
        })
    }
})
