import { getForecast, getWeather } from '../Services/weatherAPI'
import {
  getDateFromTimestamp,
  getHourTimestamp,
  getIconoOpenWeather,
  tempConvertion
} from '../Utils/helpers'

const buildCurrenWeather = ({ main, weather, dt, wind }) => {
  console.log(main, weather)
  const [
    tempElement,
    dayInfoElement,
    currentIconsElement,
    lblHumidity,
    lblFeels,
    lblWind,
    lblRain
  ] = [
    document.getElementById('currentWeatherTemp'),
    document.getElementById('currentWeatherDay'),
    document.getElementsByClassName('weather_date_icons'),
    document.getElementById('lblHumidity'),
    document.getElementById('lblFeels'),
    document.getElementById('lblWind'),
    document.getElementById('lblRain')
  ]

  tempElement.innerHTML = tempConvertion(main.temp)
  dayInfoElement.innerHTML = `${getDateFromTimestamp(dt)}  `
  currentIconsElement.innerHTML = `<i class="${getIconoOpenWeather(
    weather[0].main
  )}"></i> </i>
 <label class="titulos">   <br>${weather[0].description} </span>`
  lblHumidity.innerHTML = `${main.humidity}`
  lblFeels.innerHTML = `${tempConvertion(main.feels_like)}`
  lblWind.innerHTML = ` ${wind.speed} mph`
  lblRain.innerHTML = `Min:${tempConvertion(
    main.temp_min
  )}  Max:${tempConvertion(main.temp_max)}`
}

const buildWeatherInfo = (data) => {
  console.log('response =>', data)

  buildCurrenWeather(data)
}

const buildForecast = ({ list }) => {
  console.log(list)
  const forecastday = list.slice(0, 5)
  // const forecastweek = list.filter((item) => item.dt_txt.includes('15:00:00'))
  const watherconteiner =
    document.getElementsByClassName('weather2conteiner')[0]
  const forecastelement = forecastday
    .map(
      (element) => ` <div class="weather2">
    <div class="weatherinterno">
      <label class="titulos">${getHourTimestamp(element.dt)}</label>
    </div>
    <div class="weatherinterno">
      <i class="${getIconoOpenWeather(element.weather[0].main)}"></i>
    </div>
    <div class="weatherinterno">
      <label class="titulos">${tempConvertion(element.main.temp)}</label>
    </div>
  </div>`
    )
    .join('')
  watherconteiner.innerHTML = forecastelement
}

const getForecastinfo = async ({ coord }) => {
  const response = await getForecast(coord.lat, coord.lon)
  if (response.cod === '404') {
    console.log(response)
    return
  }
  buildForecast(response)
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
  await getForecastinfo(response)
}
