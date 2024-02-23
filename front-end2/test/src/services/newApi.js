import axios from 'axios';

const newApi = axios.create({
  baseURL:'http://localhost:8080'
})

export { newApi };