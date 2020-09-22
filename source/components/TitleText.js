import React from 'react';
import {StyleSheet} from 'react-native';
import {PRIMARY} from '../lib/colors';
import MediumText from './MediumText';

const TitleText = ({children, labelStyle, ...rest}) => {
  return (
    <MediumText
      labelStyle={[styles.titleStyle, labelStyle]}
      numberOfLines={1}
      {...rest}>
      {children}
    </MediumText>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    textTransform: 'none',
    fontSize: 16,
    lineHeight: 20,
    color: PRIMARY,
    paddingVertical: 2,
  },
});

export default TitleText;
