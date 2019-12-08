import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ContactsScreen from '../screens/ContactsScreen';
import Colors from '../constants/Colors';


const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'black' : Colors.primary
};

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-cash' : 'ios-cash'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const ContactsNavigator = createStackNavigator(
  {
    Contacts: ContactsScreen
  }, {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-contacts' : 'ios-contacts'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const LoginNavigator = createStackNavigator(
  {
    Login: LoginScreen
  }, {
    defaultNavigationOptions: defaultNavOptions
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    // Login: LoginNavigator, // remover dps
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerLabel: 'Equilibrio'
      }
    },
    Contacts: {
      screen: ContactsNavigator,
      navigationOptions: {
        drawerLabel: 'Contatos'
      }
    },
    Orders: {
      screen: OrdersNavigator,
      navigationOptions: {
        drawerLabel: 'Pedidos'
      }
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.primaryColor,
    },
  }
);

const MainNavigator = createAnimatedSwitchNavigator(
  {
    Login: LoginNavigator,
    Home: DrawerNavigator,
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-left"
          durationMs={500}
          interpolation="easeOut"
        />
        <Transition.In type="slide-right" durationMs={500} />
      </Transition.Together>
    ),
  }
);

export default createAppContainer(MainNavigator);
