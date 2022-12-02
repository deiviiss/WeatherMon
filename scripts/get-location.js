const API_KEY = '03a17b7c9ecf18f15cac5b10e1f35e74'

const accessLocation = document.getElementById('btn__location')

accessLocation.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async position => {
      let latitude = position.coords.latitude
      let longitude = position.coords.longitude
      const data = await getWeather(latitude, longitude)
      console.log(data);
    })
  }
})
  ;