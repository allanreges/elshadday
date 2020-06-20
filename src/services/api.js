import axios from 'axios';

const api = axios.create({
    baseURL: 'https://elshadday.herokuapp.com'
})

export default api;
