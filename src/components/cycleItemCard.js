import React from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet
} from 'react-native';

import PlatformTouchable from './PlatformTouchable';

const BuyingCycleCard = () => {
  const a = 'alo';
  return (
    <View style={styles.cardItem}>
      <PlatformTouchable style={{ flex: 1 }} onPress={() => console.log(a)}>
        <View style={styles.container}>
          <Text>Oie</Text>

        </View>
      </PlatformTouchable>
    </View>

  );
};

const styles = StyleSheet.create({
  cardItem: {
    flex: 1,
    margin: 5,
    // height: 90,
    borderRadius: 5,
    elevation: 3,
    overflow:
    Platform.OS === 'android' && Platform.Version >= 21
      ? 'hidden'
      : 'visible',
  },
  container: {
    flex: 1,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    padding: 20,
    justifyContent: 'flex-start',
  },
});

export default BuyingCycleCard;
