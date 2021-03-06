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
import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter'; */

import Colors from '../../styles/Colors';

const RelativeDaysModal = ({isVisible, onConfirm, onCancel}) => {
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
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  modalItemText: {
    fontSize: 22,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default RelativeDaysModal;