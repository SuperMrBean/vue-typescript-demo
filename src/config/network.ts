import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import qs from 'qs'
axios.defaults.baseURL = '../../'
axios.defaults.timeout = 1000 * 60
axios.defaults.transformRequest = [(data: any) => qs.stringify(data)]
axios.interceptors.response.use((response: AxiosResponse) => {
  // Do something with response data
  return response
}, (error: Error) => {
  // Do something with response error
  if (error.message.match('Network Error')) {
    error.message = '网络不给力！'
  }
  return Promise.reject(error)
})
interface XhrParams {
  url: string,
  method: string,
  params?: object,
  options?: object
}
const xhrService = ({ url, method, params, ...options }: XhrParams) => {
  let userRequestData = !!['PUT', 'POST', 'PATCH'].find(method => method.toUpperCase() === method)
  let axiosParams: AxiosRequestConfig = {
    method,
    url,
    data: userRequestData ? params : null,
    params: userRequestData ? null : params
  }
  return axios(Object.assign(axiosParams, options))
}

export {
  xhrService
}
