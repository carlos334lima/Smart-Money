import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
/* 
import Svg, {Circle, Rect} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Currency from '../../Core/Currency';
import moment from '../../../vendors/moment'; */

import Colors from '../../../styles/Colors';

const EntryListItem = () => {
  return (
    <View>
      <Text>EntryListItem</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  bullet: {},
  description: {
    flex: 1,
    justifyContent: 'center',
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.white,
  },
  details: {
    flexDirection: 'row',
  },
  entryAtIcon: {
    color: Colors.metal,
    marginTop: 2,
    marginRight: 2,
  },
  entryAtText: {
    fontSize: 12,
    color: Colors.metal,
  },
  addressIcon: {
    color: Colors.metal,
    marginTop: 2,
    marginRight: 2,
  },
  addressText: {
    fontSize: 12,
    color: Colors.metal,
  },
  amount: {
    justifyContent: 'center',
  },
  amountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.white,
  },
});

export default EntryListItem;