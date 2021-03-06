import React, { useState } from "react";
import { StatusBar, View, StyleSheet, TextInput, Button } from "react-native";

import BalanceLabel from "../../components/BalanceLabel";
/* 
import ActionFooter, {
  ActionPrimaryButton,
  ActionSecondaryButton,
} from '../../components/Core/ActionFooter';


import NewEntryInput from './NewEntryInput';
import NewEntryCategoryPicker from './NewEntryCategoryPicker';
import NewEntryDatePicker from './NewEntryDatePicker';
import NewEntryCameraPicker from './NewEntryCameraPicker';
import NewEntryAddressPicker from './NewEntryAddressPicker';
import NewEntryDeleteAction from './NewEntryDeleteAction';

import useEntries from '../../hooks/useEntries'; */

import Colors from "../../styles/Colors";

const NewEntry = ({ navigation }) => {

  const currentBalance = 2065.35

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance}/>

      <View>
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="CAMERA" />
      </View>

      <View>
        <Button title="Adicionar" />
        <Button title="Cancelar" onPress={() => navigation.goBack()}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  input: {
    borderColor: "#000",
    borderWidth: 1,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  formActionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
});

export default NewEntry;
