import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
/* 
import Icon from 'react-native-vector-icons/MaterialIcons';

import NewEntryCameraPickerModal from './NewEntryCameraPickerModal'; */

import Colors from '../../../styles/Colors';

const NewEntryCameraPicker = ({photo, onChangePhoto}) => {
  return (
    <View></View>
  )
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
    backgroundColor: Colors.asphalt,
    width: 59,
    height: 59,
    marginHorizontal: 3,
  },
  buttonActived: {
    backgroundColor: Colors.blue,
  },
});

export default NewEntryCameraPicker;
