import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
/* 
import EntrySummaryListItem from './EntrySummaryListItem';
 */
const EntrySummaryList = () => {
  return (
    <View>
      <Text style={styles.title}>Categorias</Text>
      <FlatList 
        data={[ 
          {key: "Alimentação $210"},
          {key: "Alimentação $210"},
          {key: "Alimentação $210"},
        ]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
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