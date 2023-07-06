import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://money-easy-api.onrender.com',
})
