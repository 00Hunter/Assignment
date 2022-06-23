import Client from "./Client";



const getTodo=()=>Client.apiClient.get(`/store`)

const storeTodo=(task)=>Client.apiClient.post(`/store`,{task})


const deleteTodo=(id)=>Client.apiClient.put(`/store/${id}`,{id})

export default {getTodo,storeTodo,deleteTodo};