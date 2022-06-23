import { StyleSheet, Text, View ,FlatList,Modal,TextInput} from 'react-native'
import {React,  useContext, useState,useEffect }from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';


import Card from '../Components/Card'
import Button from '../Components/Button'

import secureStore from "../Utils/secureStore"
import todoContext from '../Context/todoContext'
import TodoApi from '../api/Todo';
import AuthContext from '../Context/AuthContext';



export default function MainScreen({navigation}) {
    const authContext=useContext(AuthContext)
    const todocontext=useContext(todoContext);
    const [Visible,setVisible]=useState(false);
    const [todo,setToDo]=useState();
    

    const todolist=todocontext.todo || [];
   

    const handleSubmit=async()=>{
        console.log(todo)
        const newtodo={
            task:todo,
        };
       todocontext.setTodo([...todocontext.todo,newtodo])
        
       try{
        const newTodosaved=await TodoApi.storeTodo(todo) 

        if(newTodosaved.status!=200){
            console.log("Error occured")
        }

        setVisible(true)
    }

    catch(e){
        console.log("Error occured")
    }
    }

const loadTodos=async()=>{

    const result=await TodoApi.getTodo()
        console.log(result.data)

      todocontext.setTodo(result.data);   
  }

  const handleLogout=()=>{
    authContext.setUser(null);
    secureStore.removeToken();
}
  useEffect(()=>{
    loadTodos();
},[])
    
  return (

    <SafeAreaView style={styles.container}>

                <View style={styles.Text}>
                <MaterialCommunityIcons onPress={handleLogout}  size={30} name={'arrow-left'} color={"#000000"} style={{marginTop:20,marginRight:5}}/>     
                    <View style={styles.txt}>
                      <Text style={styles.foodlist}>ToDo List </Text>  
                    </View>
                <MaterialCommunityIcons onPress={()=>{navigation.navigate("ProfileScreen")}}  size={30} name={'arrow-right'} color={"#000000"} style={{marginTop:20,marginRight:5}}/>     

                </View>
                    

                 <View style={{backgroundColor:"#fbfbfb",marginBottom:50}}>
                        
                    {todolist.map((infor,index)=>{
               
               return( 
                     
                      <Card info={infor} index={index} />
               ) 
              
             })
             
            }
                </View>
                
                <View style={styles.add}>
                    <Button title={"Add ToDo"} onPress={()=>setVisible(true)} style={styles.addbtn}/>
                </View>
                
                

                <Modal 
                    visible={Visible}
                    animationType={"slide"}
                    transparent={true}
                    >
                         <View style={styles.ModalContainerParent}>
                                <View style={styles.ModalContainerChild}>

                                    <View style={{flexDirection:"row"}}>
                                        <Text style={{fontSize:20,padding:20,fontWeight:"bold",flex:1}}>Task</Text>
                                        <Entypo name="cross" size={20} color="black" onPress={()=>setVisible(false)} style={{padding:20}}/>
                                    </View>

                                  
                                                 <View style={styles.back}> 
                                        
                                                    <Text style={styles.text}>Task</Text>

                                                    <TextInput 
                                                    style={styles.ToDo}
                                                    onChangeText={(val)=>setToDo(val)}
                                                    selectionColor={'black'}
                                                    placeholder={"ToDo"}
                                                    />
                                                    <Button title={"Add Task"} onPress={handleSubmit}/>
                                                </View>                    
                          </View>                                     
                     </View>                                     
              </Modal>
              
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    add:{
        position:"absolute",
        marginVertical:700,
        width:"95%",
        alignSelf:"center"
    },
    
    back:{
        flexDirection:"column"
    },
    container:{
        flex:1,
    },
    foodlist:{
        marginTop:20,
        fontSize:30,
        alignSelf:"center",
        fontWeight:"700",
        
    },
    ToDo:{
        height:50,
        width:"95%",
        padding: 10,
        alignSelf:"center",
        borderColor:"#000000",
        borderWidth:1,
        borderRadius:20  ,
        fontSize:17
    },
    price:{
        height:50,
        width:"95%",
        padding: 10,
        alignSelf:"center",
        borderColor:"#000000",
        borderWidth:1,
        borderRadius:20  ,
        fontSize:17,
        marginBottom:25
    },
  
    text:{
        fontSize:17,
        padding:10,
        marginLeft:10
    },
    ModalContainerParent:{
        backgroundColor:"#353535",
        flex:1,
        opacity:0.9,
        justifyContent:"center",
        alignItems:"center",
        justifyContent:"flex-end"
    },
    ModalContainerChild:{
        backgroundColor:"white",
        height:400,
        width:"100%",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    Text:{
        flexDirection:"row"
        // flex:1
    },
    txt:{
        flex:1
    }
})