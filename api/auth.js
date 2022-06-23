import Client from '../api/Client'

const login=(email,password)=>Client.apiClient.post('/auth',{email,password})


export default {
    login
}