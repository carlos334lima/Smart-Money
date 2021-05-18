import React, {useEffect} from 'react';
import {StatusBar, ActivityIndicator, View, StyleSheet} from 'react-native';
/* 
import {isInitialized} from '../../services/Welcome';
 */
import Colors from '../../styles/Colors';

const Loading = () => {
  return (
    <View></View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;