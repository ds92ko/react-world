import axios from 'axios'

export const apiInstance = axios.create({
  baseURL: 'https://api.realworld.io/api',
  headers: {
    'Content-Type': 'application/json',
    // Authorization: 'Token xxxxxx.yyyyyyy.zzzzzz',
  },
})

// apiInstance.interceptors.request.use(
//   config => config,
//   error => Promise.reject(error)
// )
