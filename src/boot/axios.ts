import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { errNotif, notify } from 'src/helpers/Notify'
import { getProfile } from 'src/helpers/Session'
import config from '../../config'
import Logout from 'src/helpers/Logout'

export interface paginate {
  // filter: string, if you performing filtering data
  offset: number,
  limit: number,
  total_users: number
}
export interface ResponseAPI <T = never> {
  code: number,
  message: string,
  users: T, // you can change this
  success: boolean,
  // paginate?: paginate, if you want separate paginate response
  limit: number,
  offset: number,
  total_users: number

}

const defaultErrorMsg = 'Terjadi kesalahan saat koneksi ke server'

const parseResponse = (withToast = true) => {
  return function (response: AxiosResponse<ResponseAPI>) {
    if (response.status === 200) {
      if (response.data.success) {
        if (withToast) notify(response.data.message)
      } else {
        errNotif(response.data.message)
      }
    }
    return response
  }
}

const parseError = (error: {response: AxiosResponse<ResponseAPI>}) => {
  if (error.response) {
    if (error.response.status === 401) {
      Logout()
    } else {
      errNotif(error.response.data.message ?? defaultErrorMsg)
    }
  } else {
    errNotif('Gagal koneksi ke server')
  }

  return Promise.reject(error)
}

const createAxios = (withToast = true) => {
  const api = axios.create({
    baseURL: config.baseURL
  })
  api.interceptors.request.use(createToken)
  if (withToast) {
    api.interceptors.response.use(parseResponse(), parseError)
  } else {
    api.interceptors.response.use(parseResponse(false), parseError)
  }

  return api
}

const createToken = (config: InternalAxiosRequestConfig) => {
  const user = getProfile()

  if (user) {
    // send token to backend
    config.headers.token = user.token
    config.headers.username = user.username
  }
  return config
}

// api without toast, you can handle toast or notif in page
const api = createAxios(false)

// auto call notify
const apiToast = createAxios()

export { api, apiToast }
