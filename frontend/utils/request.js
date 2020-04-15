import axios from 'axios'

const HTTPClient = axios.create({
  baseURL: 'http://localhost:3000'
})

// HTTPClient.interceptors.request.use((config) => {
//   return config
// }, response => Promise.reject(response))

export { HTTPClient }
