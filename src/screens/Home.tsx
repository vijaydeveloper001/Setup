import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import Button from '../Common/Button';
import {homeShowdataController} from '../ViewController/homeShowdataController';
import homescreen from '../ViewModel/homescreen';
import {useSelector} from 'react-redux';
import updatedata from '../ViewController/updatedata';

export default function Home() {
  const {NewTodoNavigation} = homeShowdataController();
  
  const {updateNavigation} = updatedata();
  const data = useSelector(state => state.counterReducer.value.data);
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.TopMain,
          backgroundColor: index % 2 == 0 ? '#D3D3D3' : 'white',
        }}
        onPress={() => updateNavigation(index)}>
        <Text style={styles.Textdata}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.Header}>
        <Text style={styles.TextHeader}>Header</Text>
        <Button onpress={() => NewTodoNavigation()} />
      </View>
      <View>
        <FlatList data={data} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderBottomColor: 'grey',
    borderTopColor: 'white',
    elevation: 1,
    shadowOpacity: 5,
  },
  TextHeader: {
    fontSize: 20,
    fontWeight: '450',
    color: 'gray',
  },
  Textdata: {
    fontSize: 20,
    fontWeight: '600',
  },
  TopMain: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    // alignItems:'center',
    paddingVertical: 20,
  },
});
