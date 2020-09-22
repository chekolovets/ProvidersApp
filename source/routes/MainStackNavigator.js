import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProviderDetailScreen from '../screens/ProviderDetailScreen';
import NavigationbarHeader from '../components/NavigationbarHeader';
import ProviderMessageScreen from '../screens/ProviderMessageScreen';
import Landing from '../screens/Landing';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      mode="modal"
      screenOptions={{
        header: (props) => {
          return <NavigationbarHeader {...props} />;
        },
      }}>
      <MainStack.Screen
        name="LANDING"
        options={{
          headerTitle: 'Landing screen',
        }}
        component={Landing}
      />
      <MainStack.Screen
        name="PROVIDER_DETAILS"
        component={ProviderDetailScreen}
      />
      <MainStack.Screen
        name="PROVIDER_MESSAGE"
        component={ProviderMessageScreen}
        options={{
          headerTitle: 'Send a Message',
        }}
      />
    </MainStack.Navigator>
  );
};
export default MainStackNavigator;
