import React from 'react';
import {View, StyleSheet} from 'react-native';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';
/* 
import Container from '../Core/Container';

import useBalanceSumByCategory from '../../hooks/useBalanceSumByCategory'; */

const EntrySummary = ({days = 7, onPressActionButton}) => {
  return (
    <View style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },  
  inner: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});

export default EntrySummary;