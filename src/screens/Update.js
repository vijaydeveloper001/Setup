import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useEffect,useState} from 'react'
import Button from '../Common/Button'
import updatedata from '../ViewController/updatedata'
import {useSelector} from 'react-redux'
export default function Update() {
    const {updateNavigation,update,updatechage,updateTodo} = updatedata()
    console.log(update)
    const [updatedataa, setupdatedata] = useState()
    const data  = useSelector(state=>state.counterReducer.value.data)
    const index  = useSelector(state=>state.counterReducer.value.index)
    console.log(index)
    console.log(data)
    useEffect(() => {
        data.map((item)=>{
            // console.log(item?.title)
            if (item?.id==index){
                setupdatedata(item?.title)
            }
        })
    }, [index])
    

    
  return (
    <View style={styles.Main}>
    <TextInput
      placeholder="Update Todo"
      defaultValue={updatedataa}
      style={styles.TextInputStyle}
      onChangeText={updatechage}
      
    />
    <View style={styles.Buttonmargin}>
      <Button onpress={() => updateTodo()} />
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