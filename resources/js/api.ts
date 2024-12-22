import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const client = (() => {
  return axios.create({
    baseURL: '/api/',
  })
})()

const request = async <T>(options: AxiosRequestConfig) => {
  const onSuccess = (response: AxiosResponse<T>) => {
    const { data } = response
    return data
  }

  const onError = function (error: AxiosError) {
    return Promise.reject({
      message: error.message,
      code: error.code,
      response: error.response,
    })
  }

  return client(options).then(onSuccess).catch(onError)
}

export type LoginRequest = {
  username: string
  password: string
  rememberMe: boolean
}

export function login(data: LoginRequest) {
  return request({
    method: 'POST',
    url: '/login',
    data,
  })
}

export type UserResponse = {
  id: number
  name: string
  username: string
  email: string
}

export function me() {
  return request<UserResponse>({
    method: 'GET',
    url: '/me',
  })
}
