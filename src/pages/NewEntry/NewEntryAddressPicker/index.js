import React from 'react';
import {Alert, View, TouchableOpacity, StyleSheet} from 'react-native';
/* 
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/MaterialIcons';
 */
import Colors from '../../../styles/Colors';

const NewEntryAddressPicker = () => {
  return (
    <View></View>
  )
}
 

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

export default NewEntryAddressPicker;
