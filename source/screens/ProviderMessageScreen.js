import React from 'react';
import {
  ScrollView,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import SecondaryButton from '../components/SecondaryButton';

import {WHITE, TEXT} from '../lib/colors';
import fonts from '../lib/fonts';
import mockApi from '../mockApi';

const ProviderMessageScreen = ({navigation, route}) => {
  const [text, setText] = React.useState('');

  const handlePress = async () => {
    try {
      const response = await mockApi.post('/Provider/Message', {
        body: {message: text},
      });
      if (response?.status === 400) {
        throw new Error(response?.body?.error);
      }
      console.log(response);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset="200"
        style={styles.keyboardView}>
        <TextInput
          style={styles.text}
          placeholder="Please describe your enquiry"
          multiline
          value={text}
          onChangeText={setText}
          textAlignVertical="top"
        />
        <SecondaryButton disabled={text.length === 0} onPress={handlePress}>
          Send
        </SecondaryButton>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  text: {
    flex: 1,
    marginBottom: 16,
    backgroundColor: '#F4F4F4',
    borderRadius: 14,
    padding: 15,
    fontSize: 15,
    lineHeight: 20,
    ...fonts.regular,
    color: TEXT,
    minHeight: 180,
    maxHeight: 370,
  },
  keyboardView: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default ProviderMessageScreen;
