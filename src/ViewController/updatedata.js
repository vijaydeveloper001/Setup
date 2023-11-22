import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import { Screens } from '../navgation/AppNavigation';
import { addtodo, updatetodo } from '../redux/reducers/reducers';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
export default function updatedata() {
    const navigation = useNavigation();
    const [updateData, setupdateData] = useState('')
   
    const data  = useSelector(state=>state.counterReducer.value.data)
    const [reducerdata, setreducerdata] = useState(data)
    const index  = useSelector(state=>state.counterReducer.value.index)
    console.log(index)
    console.log(data)
    
    const dispatch = useDispatch();
    const updateNavigation = (index) =>{
       
        dispatch(updatetodo(index))
        navigation.navigate(Screens.Update,{id:index})
    }

    const updatechage = (data) =>{
        setupdateData(data)
    }



    const updateTodo = () =>{
        let predata = [...data]
        console.log(predata,'prefgfg')
        console.log(updateData)
         predata.map((item)=>{
          
            if (index == item.id){
                console.log(item,'itemdfgdsgds')
              predata[index] = {id:item.id,title:updateData}
            }
        })
       
        dispatch(addtodo(predata))
        navigation.goBack()
    }
  


    return {
       
        updateNavigation,
        updatechage,
        updateTodo
      
        
    }
}