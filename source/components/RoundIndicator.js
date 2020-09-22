import React from 'react';
import {View, StyleSheet} from 'react-native';

import RegularText from './RegularText';
import LightText from './LightText';
import {ACCENT, PRIMARY} from '../lib/colors';

export default ({number, title}) => (
  <View style={styles.container}>
    <LightText style={styles.number}>{number}</LightText>
    <RegularText style={styles.title}>{title}</RegularText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 98,
    height: 98,
    borderRadius: 98,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: ACCENT,
  },
  number: {
    fontSize: 45,
    color: PRIMARY,
    fontWeight: '300',
  },
  title: {
    fontSize: 12,
  },
});
