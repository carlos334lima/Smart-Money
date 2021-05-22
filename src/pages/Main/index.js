import React from 'react';
import {View, ScrollView, StyleSheet, Text, Button} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
 
import EntrySummary from '../../components/EntrySummary';

import EntryList from '../../components/EntryList'; 

import Colors from '../../styles/Colors';

const Main = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <BalancePanel />
      <Button title="Adicionar" onPress={() => navigation.navigate('NewEntry')}/>
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