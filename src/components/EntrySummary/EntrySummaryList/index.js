import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
/* 
import EntrySummaryListItem from './EntrySummaryListItem';
 */
const EntrySummaryList = ({entriesGrouped}) => {
  return (
    <View>
      <Text style={styles.title}>Categorias</Text>
      <FlatList 
        data={entriesGrouped}
        renderItem={({ item }) => <Text>{item.description}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  }
});

export default EntrySummaryList;