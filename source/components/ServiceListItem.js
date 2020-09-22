import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import CardBackground from './CardBackground';
import TitleText from './TitleText';
import { TEXT, ACCENT_SOFT, PRIMARY } from '../lib/colors';
import YellowBottomLine from './YellowBottomLine';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RegularText from './RegularText';
import LightText from './LightText';

const CURRENCY_SYMBOL = '$';

const ServiceListItem = ({
  name,
  info,
  icon,
  price,
  time,
  serviceType,
  currency,
  highlighted,
}) => {
  return (
    <CardBackground style={highlighted && {backgroundColor: ACCENT_SOFT}}>
      <View style={styles.outerView}>
        <View style={styles.contentView}>
          <View style={styles.titleView}>
            <TitleText>{name}</TitleText>
            <RegularText labelStyle={styles.infoText} numberOfLines={1}>
              {currency ?? CURRENCY_SYMBOL}
              {price}
            </RegularText>
          </View>
          <View style={styles.infoView}>
            <View style={styles.infoInnerView}>
              <LightText labelStyle={styles.infoText} numberOfLines={2}>
                {info}
              </LightText>
              <View style={styles.otherInfoView}>
                <View style={styles.groupView}>
                  <MaterialIcons
                    name={serviceType === 'Group' ? 'group' : 'person'}
                    style={styles.timeIcon}
                  />
                  <RegularText labelStyle={styles.groupText} numberOfLines={1}>
                    {serviceType}
                  </RegularText>
                </View>
                <View style={styles.timeView}>
                  <MaterialCommunityIcons
                    name="clock-outline"
                    style={styles.timeIcon}
                  />
                  <RegularText labelStyle={styles.groupText} numberOfLines={1}>
                    {time}
                  </RegularText>
                </View>
              </View>
            </View>
            <View style={styles.iconView}>
              <Image
                style={{width: 50, height: 50, tintColor: PRIMARY}}
                source={icon}
              />
            </View>
          </View>
        </View>
        <YellowBottomLine />
      </View>
    </CardBackground>
  );
};

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
  },
  contentView: {
    padding: 10,
    flex: 1,
  },
  infoView: {
    flexDirection: 'row',
  },
  infoInnerView: {
    flex: 1,
    paddingRight: 10,
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 5,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otherInfoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    width: '70%',
  },
  groupView: {
    flexDirection: 'row',
    flex: 1,
  },
  timeView: {
    flexDirection: 'row',
    flex: 1,
  },
  titleText: {
    flex: 8,
  },
  priceText: {
    flex: 2,
    textTransform: 'none',
    fontSize: 12,
    lineHeight: 16,
    color: TEXT,
    paddingVertical: 2,
  },
  infoText: {
    textTransform: 'none',
    fontSize: 12,
    lineHeight: 16,
    color: TEXT,
    paddingVertical: 2,
  },
  groupText: {
    textTransform: 'none',
    fontSize: 12,
    lineHeight: 16,
    color: TEXT,
    paddingVertical: 2,
    paddingRight: 5,
  },
  timeIcon: {
    alignSelf: 'center',
    fontSize: 20,
    paddingRight: 5,
  },
});

export default ServiceListItem;
