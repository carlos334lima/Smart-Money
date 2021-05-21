import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
/* 
import LinearGradient from 'react-native-linear-gradient';

import useBalance from '../../hooks/useBalance'; */

import Colors from '../../styles/Colors';

const BalanceLabel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>R$ 2.309,05</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 12,
    color: Colors.white,
  },
  panel: {
    borderRadius: 10,
    minWidth: 200,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  value: {
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default BalanceLabel;
