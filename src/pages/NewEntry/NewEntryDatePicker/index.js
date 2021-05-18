import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
/* 
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
 */
import Colors from '../../../styles/Colors';

const NewEntryDatePicker = ({value, onChange}) => {
  return (
    <View></View>
  )
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.asphalt,
    width: 59,
    height: 59,
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
});

export default NewEntryDatePicker;
