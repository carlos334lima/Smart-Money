import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
/* 
import Svg, {Circle} from 'react-native-svg';

import Currency from '../../../Core/Currency'; */

import Colors from '../../../../styles/Colors';

const EntrySummaryListItem = ({entry}) => {
  return (
    <View></View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 12,
    color: Colors.white,
    marginTop: 2,
  },
  value: {
    flex: 1,
    fontSize: 12,
    color: Colors.white,
    textAlign: 'right',
    marginTop: 2,
  },
});

export default EntrySummaryListItem;