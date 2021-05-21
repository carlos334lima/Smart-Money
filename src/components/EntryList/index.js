import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import EntryListItem from './EntryListItem';
/* 
import Container from '../Core/Container';



import useEntries from '../../hooks/useEntries'; */

const EntryList = ({days = 7, category}) => {
  return (
    <View>
      <Text>últimos lançamentos</Text>
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

export default EntryList;