import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import { Screens } from '../navgation/AppNavigation';
export default function updatedata() {
    const navigation = useNavigation();
    const updateNavigation = (index) =>{
        console.log(index)
        navigation.navigate(Screens.Update,{id:index})
    }
    return {
        updateNavigation,
      
        
    }
}