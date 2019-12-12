import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import CardItem from '../components/cycleItemCard';

import { CYCLES } from '../data/cycles';

const HomeScreen = () => (
  <View style={styles.container}>
    <FlatList
      data={CYCLES}
      renderItem={CardItem}
      keyExtractor={(item) => item.id}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4'
  }
});

export default HomeScreen;
