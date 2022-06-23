import { createStackNavigator } from '@react-navigation/stack'
import react from 'react';
import FrontScree from '../Screens/FrontScree';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';

const Stack=createStackNavigator();
const AuthNavigator=()=>{
    return( 
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='Welcome' component={FrontScree}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
    </Stack.Navigator>)
   
}

export default AuthNavigator