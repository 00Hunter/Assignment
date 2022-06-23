import Client from './Client'

const register=(name,email,password)=>Client.apiClient.post("/user",{name,email,password})

export default{
    register
}