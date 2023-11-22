import React, { useState } from 'react'
// import { data } from '../dumydata/dummydata'
import {useNavigation} from '@react-navigation/native'
import { Screens } from '../navgation/AppNavigation';
import homescreen from '../ViewModel/homescreen';
import { useDispatch,useSelector } from 'react-redux';
import { addtodo, } from '../redux/reducers/reducers';
export  function homeShowdataController() {
    const [newtodo, setnewtodo] = useState({title:''})
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const data = useSelector((state)=>state.counterReducer.value.data)
    const backHomeScreen = () =>{
        dispatch(addtodo([...data,newtodo]))
        navigation.goBack()
     }
    const NewTodoNavigation = () =>{
        navigation.navigate(Screens.New)
    }
    
    const onChangeText = (dt) =>{
    
    data.map((item)=>{
        if (item.id>item.id-1){

            setnewtodo({title:dt,id:item.id+1})
        }
    })
    }

   
  return {
    NewTodoNavigation,
    onChangeText,
    newtodo,
    backHomeScreen,
  }
}
