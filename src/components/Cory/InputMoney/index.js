import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
/* 
import {TextInputMask} from 'react-native-masked-text';
 */
import Colors from '../../../styles/Colors';

const InputMoney = () => {
  return (
    <View></View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  debitButton: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  debitButtonPrefix: {
    fontSize: 28,
    color: Colors.white,
    minWidth: 8,
  },
  debitButtonText: {
    fontSize: 28,
    color: Colors.white,
  },
  input: {
    flex: 1,
    fontSize: 28,
    color: Colors.white,
    textAlign: 'right',
    paddingLeft: 0,
    paddingRight: 20,
  },
});

export default InputMoney;