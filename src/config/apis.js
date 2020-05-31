import axios from 'axios';
let API_URL = ''

let DEV = false;

if(DEV===true){
	API_URL= 'http://localhost:5000'
}
else{
	API_URL = 'https://api.cshops.in'
}

const Axios = axios.create({
  baseURL: API_URL,
  headers: {'Content-Type': 'application/json', 'auth-token': localStorage.getItem('token')}
});
Axios.defaults.timeout = 2500;

Axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export {Axios}