import axios from 'axios';
  // `headers` are custom headers to be sent
 let headers= {
  'Content-Type': 'application/json', 
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE', 
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With' 
}

const newApi = axios.create({
  baseURL:'http://localhost:8080/api',
  headers: headers
  
})

export { newApi };