import axios, { AxiosError, AxiosResponse } from 'axios'
import { ApiError, BaseResponse, QueryParams } from '@data/network/types'
// import Cookies from "js-cookie";

const platform = 3
const version = '2.2.0'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
})

instance.interceptors.request.use(
  (config) => {
    // const accessToken = Cookies.get("accessToken");
    // if (accessToken) {
    //     config.headers.Authorization = `Bearer ${accessToken}`;
    // }
    Object.assign(config.headers, { Platform: platform, Version: version })
    config.params = { platform, ...config.params }
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

instance.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    if (!error.response) {
      console.error('network error', error)
      return Promise.reject(error)
    }

    const { data, status } = error.response
    switch (status) {
      case 400:
        console.error(data)
        break

      case 401:
        console.error('unauthorised')
        break

      case 404:
        console.error('/not-found')
        break

      case 500:
        console.error('/server-error')
        break
    }
    return Promise.reject(error)
  },
)

const parseResponseBody = <T>(response: AxiosResponse<BaseResponse<T>>) => {
  const { data } = response
  if (data.code === ApiError.CODE_SUCCESS) {
    return data.results
  } else {
    throw new ApiError(data.message, data.code)
  }
}

const httpClient = {
  get: async <T>(url: string, params?: QueryParams) =>
    instance.get<BaseResponse<T>>(url, { params }).then(parseResponseBody),

  post: <T, Body>(url: string, params: QueryParams | undefined, body: Body) =>
    instance.post<BaseResponse<T>>(url, body, { params }).then(parseResponseBody),

  delete: <T>(url: string, params?: QueryParams) =>
    instance.delete<BaseResponse<T>>(url, { params }).then(parseResponseBody),

  put: <T, Body>(url: string, params: QueryParams | undefined, body: Body) =>
    instance.put<BaseResponse<T>>(url, body, { params }).then(parseResponseBody),
}

export default httpClient
