import axios, {AxiosRequestConfig} from 'axios'
import {InterceptorRequest} from '../axios.type'

export const access_token =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTk1Zjg5ZDhjZDU0Y2RiZWRjNDQxNDE0MmQxOTZiMyIsInN1YiI6IjY0ZGRjYjRjNWFiODFhMDBmZmMxMDRkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.28dX7fB1HXEhVnlPmWoz-fzpNBL0vbwKiCfEaw1mQMs'

const request: InterceptorRequest = config => {
  config.headers = {
    Authorization: `${access_token}`,
    ...config.headers,
  }
  return config
}

axios.interceptors.request.use(request)
