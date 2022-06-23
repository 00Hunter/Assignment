import { Image,StyleSheet, TextInput, View,Text} from 'react-native'
import {React,useContext,useState} from 'react'
import { Formik } from 'formik'
import jwtDecode from 'jwt-decode'


import authApi  from "../api/auth" 
import AuthContext from '../Context/AuthContext'

import Button from "../Components/Button"
import ErrorMessage from '../Components/ErrorMessage'
import nameContext from '../Context/nameContext'




export default function LoginScreen() {

    const authContext=useContext(AuthContext);
    const namecontext=useContext(nameContext)
    const[error,setError]=useState(false);
    

    const handleSubmit=async({email,password})=>{
        const result=await authApi.login(email,password)
        console.log(result.status)
        
        if(result.status==400)   
        {
            setError(true)
            console.log("hello")
            return;
        }
     
        
        
        if(result.status==200){
        setError(false)
    
        // console.log(result.data)
        const user=jwtDecode(result.data);
    
        console.log(user);
        namecontext.setName(user.name)
        await authContext.setUser(user._userId);
    }
}
    

    

  return (
      
    <View >
        <View  style={styles.container}>
        <Text style={styles.loginText}>Login</Text>
        </View>
         <View style={styles.back}>
        <Formik
        initialValues={{email:"",password:""}}
        onSubmit={handleSubmit}
        >
            {({handleChange,handleSubmit,errors,setFieldTouched,touched})=>(
                <>
                 <View style={styles.EmailCol}>
                 
                    <TextInput 
                    style={styles.email} 
                    onChangeText={handleChange("email")}
                    onBlur={()=>setFieldTouched("email")} 
                    selectionColor={'black'}
                    placeholder="Email"
                    />   
                    <View style={styles.line}>
                    </View>
                </View>

                

                <View style={styles.PasswordCol}>
                    <TextInput 
                    style={styles.password}  
                    onBlur={()=>setFieldTouched("password")} 
                    onChangeText={handleChange("password")}
                    selectionColor={'black'}
                    // keyboardType="default"
                    secureTextEntry={true}
                    placeholder="Password"
                    />   
                    <View style={styles.line}>
                    </View>
                </View>
                <ErrorMessage visible={touched.email} error={error}/>

           
                
                <View style={styles.login}>
                    <Button 
                    title='Login' 
                    style={styles.btn} 
                    textcolor={{color:"#000000"}}
                    onPress={handleSubmit}
                    />
                </View>
                <ErrorMessage visible={touched.password} error={error}/>

                </>
            )}

             </Formik>
        </View> 
        
    </View>
    
    )
    
}

const styles = StyleSheet.create({
    container:{
        top:50,
        height:250,
        backgroundColor:"#00b566",
        
    },
   
    back:{
        marginTop:110,
    },
    email:{
        color:"black",
        fontSize:17,
        padding:8
    },
    EmailCol:{
        width:"95%",
        padding:5,
        alignSelf:"center",
        borderColor:"#E8E8E8",
        borderWidth:2,
        borderRadius:20
    },
    password:{
        // borderRadius:25,/
        color:"black",
        fontSize:17,
        padding:6,
    },
    PasswordCol:{
        width:"95%",
        padding:10,
        alignSelf:"center",
        marginTop:40,
        marginBottom:10,
        borderColor:"#E8E8E8",
        borderWidth:2,
        borderRadius:20    
    },
    login:{
        margin:10
    },
    line:{
        width:"95%",
        alignSelf:"center",
    },
    loginText:{
        fontSize:50,
        color:"#ffffff",
        top:150,
        left:15,
    },
    text:{
        margin:8,
        padding:6,
        margin:9,
        fontSize:17,
        color:"#5c6bc0"
    },
    

})