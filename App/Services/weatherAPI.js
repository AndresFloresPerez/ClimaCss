const OpenWeatherKey = 'ef5a34dcd9db4d60e459b93bbbe4a4fb'
const OpenWeatherURL = 'https://api.openweathermap.org/data/2.5/'

export const getWeather = async (city) => {
  try {
    const response = await fetch(
      `${OpenWeatherURL}weather?q=${city}&appid=${OpenWeatherKey}`
    )
    console.log('getWeather', response)
    if (!response.ok) {
      console.error('Error al consultar getWeather', response.statusText)
    }

    return await response.json()
  } catch (error) {
    console.error('Error API getWeather => ', error)
  }
}
