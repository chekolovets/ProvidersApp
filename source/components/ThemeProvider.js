import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {PRIMARY, ACCENT, TEXT} from '../lib/colors';
import fonts from '../lib/fonts';

export const theme = {
  ...DefaultTheme,
  roundness: 24,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: PRIMARY,
    accent: ACCENT,
    text: TEXT,
    notification: ACCENT,
  },
  fonts,
};

const ThemeProvider = ({children}) => (
  <PaperProvider theme={theme}>{children}</PaperProvider>
);
ThemeProvider.defaultProps = {
  roundness: 24,
};
export default ThemeProvider;
