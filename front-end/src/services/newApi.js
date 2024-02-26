import axios from 'axios';

 let headers= {
  'Content-Type': 'application/json', 
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE', 
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With' 
}

const newApi = axios.create({
  baseURL:'http://localhost:8080/api',
  
})

export { newApi };