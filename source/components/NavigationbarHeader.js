import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar, withTheme} from 'react-native-paper';
import {WHITE, PRIMARY} from '../lib/colors';
import fonts from '../lib/fonts';

const NavigationbarHeaderStyle = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    textAlign: 'left',
  },
  contentStyle: {
    alignItems: 'flex-start',
    flex: 1,
  },
  header: {
    backgroundColor: PRIMARY,
    width: '100%',
  },
});

const NavigationbarHeader = ({
  scene,
  previous,
  navigation,
  title,
  style,
  statusBarHeight,
  disableShadow,
}) => {
  const nonShadowHeader = {elevation: 0, shadowOpacity: 0};
  const options = scene?.descriptor?.options || {title};
  const screenTitle =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : title;
  return (
    <Appbar.Header
      statusBarHeight={statusBarHeight}
      style={[
        NavigationbarHeaderStyle.header,
        disableShadow && nonShadowHeader,
        style,
      ]}>
      {previous ? (
        <Appbar.BackAction onPress={navigation.goBack} color={WHITE} />
      ) : null}
      <Appbar.Content
        titleStyle={[
          NavigationbarHeaderStyle.titleStyle,
          fonts.regular,
          // previous === null && rightIcons.length === 0 && marginLeft45,
        ]}
        style={NavigationbarHeaderStyle.contentStyle}
        title={screenTitle}
      />
    </Appbar.Header>
  );
};
NavigationbarHeader.defaultProps = {
  disableShadow: true,
};
export default withTheme(NavigationbarHeader);
