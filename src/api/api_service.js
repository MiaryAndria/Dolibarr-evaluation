import axios from 'axios'
const token ='VEAnL9vx627EH69CHxAs8hbDZ6jep8a7'

const api_service = axios.create({
    
    baseURL: 'http://localhost/dolibarr/htdocs/api/index.php/',        
    headers: {
        'Accept': 'application/json',      
        'Content-Type': 'application/json' 

    }
})

api_service.interceptors.request.use(config => {
    if (token) {
        config.headers['DOLAPIKEY'] = token
    }
    return config
})

export default api_service