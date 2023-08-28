import axios from 'axios'

export const getPopularTV = async () => {
  const {data: res} = await axios({
    method: 'GET',
    url: '/tv/popular',
  })
  return res.results
}
