import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';


const Stack=createStackNavigator();

const ScreenNavigation=()=>{
    return(
    <Stack.Navigator
    screenOptions={{
       headerShown:false
    }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
    </Stack.Navigator>
    )
}

export default ScreenNavigation;