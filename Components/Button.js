import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function FinalButton({onPress,title}) {
  return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.container}>
                <Text style={[styles.text]}>{title}</Text>
            </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        height:60,
        borderRadius:10,  
        width:"95%",
        backgroundColor:"#00b566",
        margin:10
    },
    text:{
        color:"#ffffff",
        margin:10,
        alignSelf:"center",
        fontSize:25,
        fontWeight:"700"
    }
})