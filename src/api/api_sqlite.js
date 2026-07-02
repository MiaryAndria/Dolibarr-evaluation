import axios from 'axios'
const api_sqlite = axios.create({
    
    baseURL: 'http://localhost:4000',        
    headers: {
        'Accept': 'application/json',      
        'Content-Type': 'application/json' 

    }
})



export default api_sqlite