const apiKey = "fcc7518e67cb0ca5968f2ef774337981"
const weatherDataEl = document.getElementById('weather-data')
const cityInputEl = document.getElementById('city-input')
const formEl = document.querySelector('form')

formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  const cityValue = cityInputEl.value
  getWeatherData(cityValue)
})

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    
  } catch (error) {

  }
}
