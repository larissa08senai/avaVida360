import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.121.138.122:8080'
})

export default api