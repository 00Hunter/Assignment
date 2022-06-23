
import {react,useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import jwtDecode from 'jwt-decode';
import secureStore from "./Utils/secureStore"

import ScreenNavigation from './navigator/ScreeNavigator';
import { NavigationContainer } from '@react-navigation/native';
import todoContext from './Context/todoContext';
import AuthNavigator from './navigator/AuthNavigator';
import AuthContext from './Context/AuthContext';
import nameContext from './Context/nameContext';




export default function App() {
  const [todo,setTodo]=useState([]);
  const [name,setName]=useState();
  const [user,setUser]=useState();

  const restoreToken=async()=>{
    const result =await secureStore.getToken();
    // console.log('hello honey',result);
  
    setUser(jwtDecode(result._userId));
    setName(jwtDecode(result._name));
  }
  
  useEffect(()=>{
      restoreToken();
  },[])

  return (
    
    //  <ProfileScreen/>
    <AuthContext.Provider value={{user,setUser}}>
      <nameContext.Provider value={{name,setName}}>
    <todoContext.Provider value={{todo,setTodo}}>
     <NavigationContainer>
      {user? <ScreenNavigation/> :<AuthNavigator/>}
     </NavigationContainer>
     </todoContext.Provider>
     </nameContext.Provider>
     </AuthContext.Provider> 
  );
}

const styles = StyleSheet.create({
  
});
