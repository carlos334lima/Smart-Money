import React from "react";
import { View, StyleSheet } from "react-native";

import EntrySummaryChart from "./EntrySummaryChart";
import EntrySummaryList from "./EntrySummaryList";
/* 
import Container from '../Core/Container';

import useBalanceSumByCategory from '../../hooks/useBalanceSumByCategory'; */

const EntrySummary = ({entriesGrouped}) => {
  return (
    <View style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList entriesGrouped={entriesGrouped}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  inner: {
    flexDirection: "row",
    paddingVertical: 10,
  },
});

export default EntrySummary;
