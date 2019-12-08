import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MyHeaderButton from '../components/CustomHeaderButton';


const OrdersScreen = () => (
  <View style={styles.container}>
    <Text>This is the orders screen!</Text>
  </View>
);


OrdersScreen.navigationOptions = (navData) => ({
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  )
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default OrdersScreen;
