import {React,useContext, useState} from 'react'
import { StyleSheet, Text,TextInput, View } from 'react-native'


import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'; 
import nameContext from '../Context/nameContext';

import Button from '../Components/Button'




export default function ProfileScreen() {
  

  const namecontext=useContext(nameContext);
  const [newName,setNewName]=useState();
  const [newPassword,setNewPassword]=useState();

  const handlechangeName=()=>{ 
    namecontext.setName(newName)
  }
  const handlechangepassword=()=>{ 
    namecontext.setNewPassword(newPassword)
  }

  return (
   <SafeAreaView style={styles.container}>
     <Ionicons name="person-circle-sharp" size={85} color="black" style={{top:70,alignSelf:"center"}} />
    
      <View style={styles.inputcontainer}>
          <Text style={styles.txt}>{namecontext.name}</Text>
          <TextInput style={styles.Input} placeholder={"Name"} onChangeText={(text)=>{setNewName(text)}}/>
          <Button title={"Change Name"} onPress={handlechangeName} />
      </View>
      <View style={styles.inputcontainer}>
          <Text style={styles.txt}>{namecontext.password}</Text>
          <TextInput style={styles.Input} placeholder={"password "} onChangeText={(text)=>{setNewName(text)}} />
          <Button title={"Change password"} onPress={handlechangepassword}/>
    </View>
     
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  Input:{
        width:"90%",
        height:65,
        padding:5,
        alignSelf:"center",
        borderColor:"#E8E8E8",
        borderWidth:2,
        borderRadius:20
  },
  inputcontainer:{
    top:150,
    padding:10,
    marginBottom:30
    
  },
  txt:{
    padding:5,
    alignSelf:"center",
    marginBottom:10,
    fontSize:20
  }
})