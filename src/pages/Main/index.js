import React from 'react';
import {View, ScrollView, StyleSheet, Text, Button} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
 
import EntrySummary from '../../components/EntrySummary';

import EntryList from '../../components/EntryList'; 

import Colors from '../../styles/Colors';

import { saveEntry } from '../../services/Entries'

const Main = ({ navigation }) => {

  const currentBalance  = 2564.68;

  const save = () => {
    saveEntry()
  }

  const entries = [ 
    {key: '1', description : "Alimentação $210", amount: 10},
    {key: '2', description : "Alimentação $210", amount: 10},
    {key: '3', description : "Alimentação $210", amount: 10},
  ]

  const entriesGrouped = [ 
    {key: '1', description : "Alimentação $210", amount: 10},
    {key: '2', description : "Alimentação $210", amount: 10},
    {key: '3', description : "Alimentação $210", amount: 10},
  ]

  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalance}/>
      <Button title="Adicionar" onPress={save}/>
      <EntrySummary entriesGrouped={entriesGrouped}/>
      <EntryList entries={entries}/>
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