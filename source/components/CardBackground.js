import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BORDER, WHITE} from '../lib/colors';

const CardBackground = ({children, customStyle, height, ...rest}) => {
  return (
    <View style={[styles.bookingView, customStyle, {height}]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  bookingView: {
    shadowColor: BORDER,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1.22,
    height: 50,
    backgroundColor: WHITE,
    flexDirection: 'row',
    marginTop: 1,
    // marginHorizontal: 2,
    // marginBottom: 1,
    elevation: 3,
  },
});

export default CardBackground;
