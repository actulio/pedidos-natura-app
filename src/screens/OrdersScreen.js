import React from 'react';
import {
  View, Text, StyleSheet, Button
} from 'react-native';

const OrdersScreen = (props) => (
  <View style={styles.container}>
    <Text>This is the orders screen!</Text>
    <Button
      title="go to add new porduct"
      onPress={() => props.navigation.navigate('NewOrderByClient')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default OrdersScreen;
