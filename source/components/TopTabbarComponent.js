import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {PRIMARY, WHITE, INACTIVE_TINT_COLOR, ACCENT} from '../lib/colors';
import fonts from '../lib/fonts';
const Tab = createMaterialTopTabNavigator();

const TopTabbarComponent = ({items}) => {
  const tabs = () => {
    let tabs = [];
    //  loop to create tabs
    for (const [index, item] of items.entries()) {
      tabs.push(
        <Tab.Screen
          name={item.title}
          title={item.title}
          component={item.component}
          key={index}
        />,
      );
    }
    return tabs;
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: WHITE,
        labelStyle: [styles.labelStyle, fonts.medium],
        inactiveTintColor: INACTIVE_TINT_COLOR,
        style: styles.style,
        indicatorStyle: styles.indicatorStyle,
      }}>
      {tabs()}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarOptions: {},
  labelStyle: {
    fontSize: 14,
  },
  indicatorStyle: {
    backgroundColor: ACCENT,
    height: 2,
  },
  style: {
    backgroundColor: PRIMARY,
  },
});

export default TopTabbarComponent;
