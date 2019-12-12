import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactsScreen = () => (
  <View style={styles.container}>
    <Text>This is the contacts screen!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ContactsScreen;
