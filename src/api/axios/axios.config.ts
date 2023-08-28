import axios from 'axios'
import './interceptors'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.headers.common['Accept'] = 'application/json'
