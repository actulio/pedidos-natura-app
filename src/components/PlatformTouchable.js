/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';

const PlatformTouchable = (props) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <TouchableComponent {...props}>
      {props.children}
    </TouchableComponent>
  );
};

export default PlatformTouchable;
