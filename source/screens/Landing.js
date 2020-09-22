import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import MediumText from '../components/MediumText';

const Landing = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <MediumText onPress={() => navigation.push('PROVIDER_DETAILS')}>
        Open Profile
      </MediumText>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Landing;
