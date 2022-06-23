import { StyleSheet, TextInput, View,Text } from 'react-native'
import {React,useContext} from 'react'
import { Formik } from 'formik'
import secureStore from '../Utils/secureStore'
import jwtDecode from 'jwt-decode'


import user from '../api/user'
import Button from "../Components/Button"
import AuthContext from '../Context/AuthContext'
import nameContext from '../Context/nameContext'

export default function RegisterScreen() {
    const authContext=useContext(AuthContext);
    const namecontext=useContext(nameContext);


    const handleSubmit=async({name,email,password})=>{
        namecontext.setName(name)
        console.log(namecontext.name)

      const result=await user.register(name,email,password);
      console.log(result)

       const userdetails=jwtDecode(result.headers['x-auth-token']);
        // console.log(userdetails._userId)
        authContext.setUser(userdetails._userId);
       secureStore.storeToken(result.headers['x-auth-token']);

      
    }
  return (
    <View >
        
        <View style={styles.container}>
        <Text style={styles.registerText}>Register</Text>
        </View>
        <Formik
        initialValues={{name:'',email:'',password:''}}
        onSubmit={handleSubmit}
        >
         {({handleChange,errors,handleSubmit})=>(
              <>
               <View style={styles.back}> 
              
                
                    {/* <Text style={styles.text}>Name</Text> */}
                    <TextInput 
                    style={styles.name}
                    onChangeText={handleChange('name')}
                    selectionColor={'black'}
                    placeholder={"Name"}
                    />
                    {/* <View style={styles.line}></View> */}
                

                
                    {/* <Text style={styles.text}>Email</Text> */}
                    <TextInput
                    onChangeText={handleChange('email')}
                    style={styles.email}
                    selectionColor={'black'}
                    placeholder={"Email"}
                    />
                    {/* <View style={styles.line}></View> */}
               

                
                    {/* <Text style={styles.text}>Password</Text> */}
                    <TextInput
                    style={styles.password}
                    onChangeText={handleChange('password')}
                    selectionColor={'black'}
                    placeholder={"Password"}
                    secureTextEntry={true}
                    />
                    {/* <View style={styles.line}></View> */}
                
                <View  style={styles.registerButton}>
                <Button title='Register' 
                onPress={handleSubmit} 
                style={styles.Button}
                textcolor={{color:"#ffffff"}}
                />
                </View>
            </View>
                
          </>
            )}
        </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
    back:{
        marginTop:20,

    },
   Button:{
       top:25,
       backgroundColor:"#5c6bc0",
       color:"#ffffff"
   },
    container:{
       backgroundColor:"#00b566",
       height:250
    },
    name:{
        width:"95%",
        padding: 15,
        alignSelf:"center",
        marginTop:40,
        marginBottom:10,
        borderColor:"#E8E8E8",
        borderWidth:2,
        borderRadius:20  ,
        fontSize:17
    },
    email:{
        // marginTop:20,
        // padding:10,
        // color:"black",
        width:"95%",
        padding:15,
        alignSelf:"center",
        marginTop:15,
        marginBottom:10,
        borderColor:"#E8E8E8",
        borderWidth:2,
        borderRadius:20  ,
        fontSize:17
    },
    logo:{
        height:300,
        width:"100%"
    },
    password:{
        // padding:10,
        // color:"black",
        width:"95%",
        padding:15,
        alignSelf:"center",
        marginTop:15,
        marginBottom:10,
        borderColor:"#E8E8E8",
        borderWidth:2,
        borderRadius:20  ,
        fontSize:17
    },
    line:{
        backgroundColor:"#E8E8E8",
        width:"95%",
        alignSelf:"center",
        height:1
    },
    registerText:{
        top:150,
        fontSize:50,
        color:"#ffffff",
        left:15,
    },
    registerButton:{
        margin:10
    },
    text:{
        padding:4,
        color:"#5c6bc0",
        fontSize:15
    }
})