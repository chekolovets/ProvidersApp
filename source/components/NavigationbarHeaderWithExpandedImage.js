import React, {PureComponent} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import {Appbar} from 'react-native-paper';
import {WHITE, PRIMARY} from '../lib/colors';

const screenWidth = Math.round(Dimensions.get('window').width);

const Style = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: PRIMARY,
  },
  backgroundImage: {
    width: screenWidth,
    height: 200,
    position: 'absolute',
  },
  leftBtnWrapper: {
    width: 80,
    height: 44,
    position: 'absolute',
    top: ifIphoneX ? 44 : 20,
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

  get titlesPart() {}

  get leftButton() {
    const {navigation} = this.props;
    return <Appbar.BackAction onPress={navigation.goBack} color={WHITE} />;
  }

  render() {
    const {backgroundImage} = this.props;
    return (
      <View style={[Style.container]}>
        <StatusBar barStyle="dark-content" />
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
      </View>
    );
  }
}
