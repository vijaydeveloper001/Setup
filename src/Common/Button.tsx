import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Button({onpress}) {
  return (
    <TouchableOpacity style = {styles.TouchButton} onPress={onpress}>
            <Text style = {styles.TextButton}>Create</Text>
     </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    TouchButton:{
        borderColor:'gray',
        borderWidth:1,
        paddingHorizontal:20,
        paddingVertical:8,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    TextButton:{
        fontSize:20,
        fontWeight:'600',
        color:'gray'
    }
})