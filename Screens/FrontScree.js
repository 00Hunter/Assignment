import {StyleSheet,View ,Image,TouchableOpacity,Text} from 'react-native'
import React from 'react'
import Button from "../Components/Button"

import {  } from 'react-native-web'


export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.back}>

          
          <View style={styles.Login}>
             <Button title={"Sign In"} onPress={()=>{navigation.navigate('Login')}} />
          </View>
          <View style={styles.Register}>
            {/* <Text style={styles.Text}>New User ?</Text> */}
          <TouchableOpacity onPress={()=>{navigation.navigate('Register')}} >
              <Text style={styles.Register} >Sign Up</Text>
                 
      
  </TouchableOpacity>
            </View>
          {/* <View style={styles.Register}>
              <Button title='Register' onPress={()=>{navigation.navigate("Register")}} style={styles.registerbtn}/>
          </View> */}


        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    backgroundColor:"#00b566",
    flex:1

},
back:{
    top:200
},
Login:{
    padding:15,
    
},
Register:{
    padding:15,
    fontSize:23,
    opacity:0.84,
    color:"#ffffff",
    top:10,
    alignSelf:"center"
    
},
textinput:{
  backgroundColor:"red"
},


logoContainer: {
  top: 60,
  alignItems: "center",
  backgroundColor:"#5c6bc0"
},
logo:{
  width:400,
  height:400,
  
},
Text:{
  fontSize:20
},
})