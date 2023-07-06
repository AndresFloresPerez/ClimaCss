const unplashAPI = '5CU7DP2v5fXQN0OjE78CaEtjEFxPcFwo_mw6R-UqpSA'
const unplashURL = 'https://api.unsplash.com/search/photos/'
export const getImage = async (city) => {
  try {
    const response = await fetch(
      `${unplashURL}?query=${city}&client_id=${unplashAPI}`
    )
    console.log('getImage', response)
    if (!response.ok) {
      console.error('Error al consultar getWeather', response.statusText)
    }

    return await response.json()
  } catch (error) {
    console.error('Error API getImage => ', error)
  }
}
