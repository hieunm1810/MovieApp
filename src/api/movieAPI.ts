import axios from 'axios'

export const getPopularMovies = async () => {
  const {data: res} = await axios({
    method: 'GET',
    url: '/movie/popular',
  })
  return res.results
}

export const getUpcomingMovies = async () => {
  const {data: res} = await axios({
    method: 'GET',
    url: '/movie/upcoming',
  })
  return res
}
