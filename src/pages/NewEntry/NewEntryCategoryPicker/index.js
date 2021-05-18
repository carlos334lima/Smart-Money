import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
/* 
import CategoryModal from '../../../components/CategoryModal';
 */
import Colors from '../../../styles/Colors';

const NewEntryCategoryPicker = () => {
 return (
   <View></View>
 )
};

const styles = StyleSheet.create({
  pickerButton: {
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
  },
  pickerButtonText: {
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default NewEntryCategoryPicker;
