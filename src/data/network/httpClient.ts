import axios, { AxiosError, AxiosResponse } from 'axios'
import { ApiError, BaseResponse, QueryParams } from '@data/network/types'
// import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
})

instance.interceptors.request.use(
  (config) => {
    // const accessToken = Cookies.get("accessToken");
    // if (accessToken) {
    //     config.headers.Authorization = `Bearer ${accessToken}`;
    // }
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

instance.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    const { data, status } = error.response!
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

const preprocessParams = (queryParams?: QueryParams): QueryParams => {
  const params = queryParams || {}
  params.platform = 3
  return params
}

const parseResponseBody = <T>(response: AxiosResponse<BaseResponse<T>>) => {
  const { data } = response
  if (data.code === ApiError.CODE_SUCCESS) {
    return data.results
  } else {
    throw new ApiError(data.message, data.code)
  }
}

const httpClient = {
  get: async <T>(url: string, queryParams?: QueryParams) =>
    instance.get<BaseResponse<T>>(url, { params: preprocessParams(queryParams) }).then(parseResponseBody),

  post: <T, Body>(url: string, queryParams: QueryParams | undefined, body: Body) =>
    instance.post<BaseResponse<T>>(url, body, { params: preprocessParams(queryParams) }).then(parseResponseBody),

  delete: <T>(url: string, queryParams?: QueryParams) =>
    instance.delete<BaseResponse<T>>(url, { params: preprocessParams(queryParams) }).then(parseResponseBody),

  put: <T, Body>(url: string, queryParams: QueryParams | undefined, body: Body) =>
    instance.put<BaseResponse<T>>(url, body, { params: preprocessParams(queryParams) }).then(parseResponseBody),
}

export default httpClient
