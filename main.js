import { searchInit } from './App/Components/weatherComponent'
import './style.css'

const searchElement = document.getElementById('search')

searchElement.addEventListener('keypress', searchInit)
