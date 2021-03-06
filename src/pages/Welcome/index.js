import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
/* 
import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

import WelcomeMessage from './WelcomeMessage';
import WelcomeBalanceInput from './WelcomeBalanceInput';

import useCategories from '../../hooks/useCategories';
import {addEntry} from '../../services/Entries';
import {setInitialized} from '../../services/Welcome'; */

import Colors from '../../styles/Colors';
import Logo from '../../assets/logo-white.png';

const Welcome = ({navigation}) => {
  

  return (
    <View style={styles.container}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  logo: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Welcome;
