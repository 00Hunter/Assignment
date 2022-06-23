import { Image,StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

import todoContext from '../Context/todoContext';



export default function Card({info,index}) {

    console.log(info.task)
    const todocontext=useContext(todoContext);

    const handleDelete=()=>{
        // console.log(index)
        const temp=todocontext.todo
        const filteredItems = temp.slice(0, index).concat(temp.slice(index + 1, temp.length))

          console.log(filteredItems);
        todocontext.setTodo(filteredItems)

    }

  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{info.task}</Text>
        </View>

        <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="delete-outline" size={24} color="black" onPress={handleDelete}/>
        </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ecf0f1',
        height:63,
        width:"95%",
        borderRadius:10,
        borderColor:'#d9d9d9',
        borderWidth:1,
        flexDirection:"row",
        padding:10,
        margin:10
        
    },
    iconContainer:{
        flexDirection:"row",
        // padding:10
        alignItems:"center",
        borderLeftWidth:1,
        borderLeftColor:"#d9d9d9"
    },
    price:{
        color:"#d9d9d9",
        fontSize:17,
        fontWeight:"700"
    },
    priceContainer:{
        
        flexDirection:"row",
        marginRight:20,
        alignSelf:"center"
    },
    text:{
        color:"black",
        padding:5,
       
        fontSize:20,
        fontWeight:"700"

    },
    textContainer:{
        
        flex:1,
        flexDirection:"row",
    }
})