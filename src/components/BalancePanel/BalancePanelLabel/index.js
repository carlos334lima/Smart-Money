import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
/* 
import Currency from '../../Core/Currency'; */

import Colors from '../../../styles/Colors';

const BalancePanelLabel = ({ currentBalance }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>R$ {currentBalance}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    zIndex: 1,
  },
  label: {
    fontSize: 14,
    color: Colors.white,
  },
  value: {
    fontSize: 36,
    color: Colors.white,
  },
});

export default BalancePanelLabel;