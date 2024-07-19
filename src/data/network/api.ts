import axios, { AxiosError, AxiosResponse } from 'axios'
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

axios.interceptors.response.use(
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

const responseBody = <T>(response: AxiosResponse<T>) => response.data
const request = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T, Body>(url: string, body: Body) => instance.post<T>(url, body).then(responseBody),
}

export default request
