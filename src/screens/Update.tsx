import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import Button from '../Common/Button'
import updatedata from '../ViewController/updatedata'
import {useSelector} from 'react-redux'
export default function Update() {
    const {updateNavigation} = updatedata()
    const data  = useSelector(state=>state.counterReducer.value.data)
    console.log(data)
  return (
    <View style={styles.Main}>
    <TextInput
      placeholder="Update Todo"
    //   value={newtodo}
      style={styles.TextInputStyle}
    //   onChangeText={onChangeText}
      
    />
    <View style={styles.Buttonmargin}>
      <Button onpress={() => updateNavigation()} />
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    Main: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
      },
      TextInputStyle: {
        paddingVertical: 15,
        fontSize: 20,
        backgroundColor: '#D3D3D3',
        paddingHorizontal: 20,
      },
      Buttonmargin: {
        marginTop: 20,
      },
})