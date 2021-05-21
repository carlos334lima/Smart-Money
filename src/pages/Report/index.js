import React, { useState } from "react";
import {
  StatusBar,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  Picker,
  Button
} from "react-native";

import BalanceLabel from "../../components/BalanceLabel";
import EntrySummary from "../../components/EntrySummary";
import EntryList from "../../components/EntryList";
/* 
import Icon from 'react-native-vector-icons/MaterialIcons';

import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';


import RelativeDaysModal from '../../components/RelativeDaysModal';
import CategoryModal from '../../components/CategoryModal'; */

import Colors from "../../styles/Colors";

const Report = () => {
  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View>
        <Picker>
          <Picker.Item label="Todas as categorias"></Picker.Item>
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias"></Picker.Item>
        </Picker>
      </View>
      <EntrySummary />
      <EntryList />

      <View>
        <Button title="Salvar" />
        <Button title="Fechar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  filtersContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5,
  },
  filterButton: {
    flexDirection: "row",
    borderColor: Colors.champagneDark,
    borderWidth: 1,
    borderRadius: 150,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  filterButtonText: {
    color: Colors.champagneDark,
  },
});

export default Report;
