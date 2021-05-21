import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
 
import EntrySummary from '../../components/EntrySummary';

import EntryList from '../../components/EntryList'; 

import Colors from '../../styles/Colors';

const Main = () => {
  return (
    <View style={styles.container}>
      <BalancePanel />
      <EntrySummary/>
      <EntryList />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default Main;