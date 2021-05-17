import React from 'react';
import {
  Modal,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
/* 
import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter';

import useCategories from '../../hooks/useCategories'; */

import Colors from '../../styles/Colors';

const CategoryModal = () => {
  return (
    <View></View>
  )
}


const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  modalItem: {
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
  },
  modalItemText: {
    fontSize: 22,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default CategoryModal;