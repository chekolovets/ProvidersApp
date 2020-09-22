import React from 'react';
import {View, StyleSheet} from 'react-native';

const YellowBottomLine = () => {
  return <View style={styles.lineStyle} />;
};

const styles = StyleSheet.create({
  lineStyle: {
    height: 2,
    backgroundColor: '#FFB71B',
    // alignSelf: 'flex-end',
    // position:'absolute'
  },
});
export default YellowBottomLine;
