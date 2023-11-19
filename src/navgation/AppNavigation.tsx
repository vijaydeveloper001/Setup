import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NewTodo from '../screens/NewTodo';
import Home from '../screens/Home';
import Update from '../screens/Update';
const Stack = createNativeStackNavigator();

export const Screens = {
    Home:"HomeScreen",
    New:"NewTodao",
    Update:"UpdateScreen"
}


export default function AppNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name  = {Screens.Home} component={Home} options={{headerShown:false}}/>
        <Stack.Screen name  = {Screens.New} component={NewTodo} options={{headerShown:false}}/>
        <Stack.Screen name  = {Screens.Update} component={Update} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})