import { getWeather } from '../Services/weatherAPI'
import { getIconoOpenWeather, tempConvertion } from '../Utils/helpers'

const buildCurrenWeather = ({ main, weather, dt }) => {
  console.log(main, weather)
  const [tempElement, dayInfoElement, currentIconsElement] = [
    document.getElementById('currentWeatherTemp'),
    document.getElementById('currentWeatherDay'),
    ...document.getElementsByClassName('weather_date_icons')
  ]

  tempElement.innerHTML = tempConvertion(main.temp)
  dayInfoElement.innerHTML = dt
  currentIconsElement.innerHTML = `<i class="${getIconoOpenWeather(
    weather[0].main
  )}"></i> </i>
 <label class="titulos">   <br>${weather[0].description} </span>`
}

const buildWeatherInfo = (data) => {
  console.log('response =>', data)

  buildCurrenWeather(data)
}

export const searchInit = async (e) => {
  // si no dan enter
  if (e.key !== 'Enter') return

  const textSearch = e.target.value
  console.log('input value', textSearch)

  // min caracteres son 3
  if (textSearch.length <= 3) return

  const response = await getWeather(textSearch)

  if (response.cod === '404') {
    alert('city not found')
    return
  }

  buildWeatherInfo(response)
}
