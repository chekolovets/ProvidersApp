import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton, withTheme} from 'react-native-paper';
import {PRIMARY} from '../lib/colors';

const Button = ({children, labelStyle, color, ...rest}) => {
  const borderStyle = {borderColor: color};
  return (
    <PaperButton
      style={borderStyle}
      theme={{roundness: 24}}
      labelStyle={[
        styles.labelStyle,
        labelStyle,
        rest.mode === 'contained' && {color: '#FFF'},
      ]}
      color={color}
      {...rest}>
      {children}
    </PaperButton>
  );
};

Button.defaultProps = {
  color: PRIMARY,
  mode: 'contained',
};

const styles = StyleSheet.create({
  labelStyle: {
    textTransform: 'none',
    fontSize: 15,
    lineHeight: 20,
    paddingVertical: 1,
  },
});

export default withTheme(Button);
