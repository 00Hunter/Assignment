import {create} from "apisauce";
import secureStore from "../Utils/secureStore";


const apiClient=create({
    
    baseURL:"http://192.168.1.16:3000/api" 
    // baseURL:"http://192.168.1.16:3000/api" 
    
})
apiClient.addAsyncRequestTransform(async(request)=>{
    const authToken=await secureStore.getToken();
    // console.log(authToken)
    if(!authToken) return;


    request.headers["x-auth-token"]=authToken;
    // console.log(request)
})

export default {
    apiClient
};