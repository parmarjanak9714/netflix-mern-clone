import axios from 'axios';


const API = axios.create({
  baseURL: 'https://netflix-mern-clone-hey2.onrender.com/api',
});

export default API;
