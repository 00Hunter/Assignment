import * as secureStore from "expo-secure-store";

const key ='UserId';

const storeToken=async(authToken)=>{
    try{
        // console.log(authToken);
        await secureStore.setItemAsync(key,authToken);
    }
    catch(error){
        console.log(error)
    }
}

const getToken=async()=>{
    try{
        return await secureStore.getItemAsync(key)
    }
    catch(error){
        console.log(error)
    }
}

const removeToken=async()=>{
    try{
        await secureStore.deleteItemAsync(key);
    }catch(error){
        console.log("Error removing the Token",error)
    }
}

export default{
    storeToken,getToken,removeToken
}