import {StyleSheet, Text, TextInput, View} from 'react-native';
import React,{useState} from 'react';
import Button from '../Common/Button';
import {homeShowdataController} from '../ViewController/homeShowdataController';
import homescreen from '../ViewModel/homescreen';
import updatedata from '../ViewController/updatedata';
export default function NewTodo() {
  const {onChangeText,newtodo,backHomeScreen} = homeShowdataController();
  
  
  return (
    <View style={styles.Main}>
      <TextInput
        placeholder="Add Todo"
        value={newtodo}
        style={styles.TextInputStyle}
        onChangeText={onChangeText}
        
      />
      <View style={styles.Buttonmargin}>
        <Button onpress={() => backHomeScreen()} />
      </View>
    </View>
  );
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
});
