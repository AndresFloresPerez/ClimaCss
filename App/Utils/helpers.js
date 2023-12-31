export const getDateFromTimestamp = (timestamp) => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
  ]
  const currentDate = new Date(timestamp * 1000)
  const day = days[currentDate.getDay()]
  const month = months[currentDate.getMonth()]

  return `${day} / ${month}  ${currentDate.getDate()} `
}

export const getHourTimestamp = (timestamp) => {
  const hour = new Date(timestamp * 1000)
  return hour.toLocaleString('en-US', { hour: 'numeric', hour12: true })
}
export const getDateHourTimestamp = (timestamp) => {
  const hour = new Date(timestamp * 1000)
  return hour.toLocaleTimeString('en-US')
}
export const tempConvertion = (temp) => {
  return `${Math.round(temp - 273.15)}°`
}

export const getIconoOpenWeather = (main) => {
  const icons = {
    Clear: 'fas fa-sun sunny',
    Clouds: 'fas fa-cloud',
    Drizzle: 'fas fa-cloud-showers-heavy gray',
    Rain: 'fas fa-cloud-rain gray',
    Thunderstorm: 'fas fa-bolt sunny',
    Snow: 'fas fa-snowflake cold',
    Mist: 'fas fa-smog',
    Smoke: 'fas fa-smog',
    Haze: 'fas fa-smog',
    Dust: 'fas fa-smog',
    Fog: 'fas fa-smog',
    Sand: 'fas fa-wind',
    Ash: 'fas fa-smog',
    Squall: 'fas fa-wind gray',
    Tornado: 'fas fa-tornado gray'
  }

  return icons[main] || 'fas fa-question'
}
