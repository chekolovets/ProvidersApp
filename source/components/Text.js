import React from 'react';
import {StyleSheet} from 'react-native';
import {Text as PaperText, withTheme} from 'react-native-paper';

const Text = ({children, theme, fontWeight, labelStyle, ...rest}) => {
  return (
    <PaperText
      style={[styles.labelStyle, labelStyle, theme.fonts[fontWeight]]}
      {...rest}>
      {children}
    </PaperText>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    textTransform: 'none',
    fontSize: 15,
    textAlign: 'left',
  },
});

export default withTheme(Text);
