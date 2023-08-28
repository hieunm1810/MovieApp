import {AxiosRequestConfig} from 'axios'

export type InterceptorRequest = (
  config: AxiosRequestConfig,
) => AxiosRequestConfig
