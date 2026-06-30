import axios from 'axios'
const api_node = axios.create({
    
    baseURL: 'http://localhost:3001',        
    headers: {
        'Accept': 'application/json',      
        'Content-Type': 'application/json' 

    }
})



export default api_node