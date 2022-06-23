import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ErrorMessage({error,visible}) {

    
         if(!visible || !error) return null;


         return (
            <View style={styles.conatiner}>
            <Text style={styles.text}>Invalid User Email or Password!!</Text>
            </View>
            );
        
  
}

const styles = StyleSheet.create({
    conatiner:{
        padding:5,
        left:12,
        backgroundColor:"#f5f5f5"
    },
    text:{
        color:"red"
    }
})