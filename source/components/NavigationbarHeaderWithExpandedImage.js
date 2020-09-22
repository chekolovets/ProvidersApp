import React, {PureComponent} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import {Appbar} from 'react-native-paper';
import {WHITE, PRIMARY} from '../lib/colors';

const screenWidth = Math.round(Dimensions.get('window').width);

const Style = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY,
    minHeight: 200,
  },
  backgroundImage: {
    width: screenWidth,
    height: 200,
  },
  leftBtnWrapper: {
    width: 80,
    height: 44,
    position: 'absolute',
    ...ifIphoneX(
      {
        top: 60,
      },
      {
        top: 20,
      },
    ),
    left: 0,
  },
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default class NavigationbarHeaderWithExpandedImage extends PureComponent {
  static defaultProps = {
    navigation: null,
    backgroundImage: '',
    style: null,
  };

  get leftButton() {
    const {navigation} = this.props;
    return <Appbar.BackAction onPress={navigation.goBack} color={WHITE} />;
  }

  render() {
    const {backgroundImage} = this.props;
    return (
      <>
        <SafeAreaView style={[Style.container]}>
          {backgroundImage ? (
            <ImageBackground
              source={{uri: backgroundImage}}
              style={Style.backgroundImage}
            />
          ) : (
            <View style={Style.indicatorContainer}>
              <ActivityIndicator size="large" color="#999999" />
            </View>
          )}
          <View style={Style.leftBtnWrapper}>{this.leftButton}</View>
        </SafeAreaView>
      </>
    );
  }
}
