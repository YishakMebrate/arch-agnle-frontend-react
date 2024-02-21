import axios from 'axios'


// Add a request interceptor
axios.interceptors.request.use(
  config => {
    const token = ''
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)