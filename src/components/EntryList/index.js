import React from "react";
import { FlatList, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import EntryListItem from "./EntryListItem";
/* 
import Container from '../Core/Container';



import useEntries from '../../hooks/useEntries'; */

const EntryList = ({ entries }) => {
  return (
    <View>
      <Text>últimos lançamentos</Text>
      <FlatList
        data={entries}
        renderItem={({ item }) => <Text>{item.description}</Text>}
      />
    </View>
  );
};

export default EntryList;
