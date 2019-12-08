import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MyHeaderButton from '../components/CustomHeaderButton';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>This is the home screen!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

HomeScreen.navigationOptions = (navData) => ({
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


export default HomeScreen;
