import React from 'react';
import { Text, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
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
    defaultNavigationOptions: defaultNavOptions
  }
);

const ContactsNavigator = createStackNavigator(
  {
    Contacts: ContactsScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen
  },
  {
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

const BottomTabsRouteConfig = {
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="md-cash" size={23} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.primaryColor,
      tabBarLabel: <Text style={{ fontSize: 14 }}>Finanças</Text>
    }
  },
  Orders: {
    screen: OrdersNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="md-cart" size={23} color={tabInfo.tintColor} />
      ),
      tabBarColor: '#1A6D69',
      tabBarLabel: <Text style={{ fontSize: 15 }}>Pedidos</Text>
    }

  },
  Contacts: {
    screen: ContactsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="md-contacts" size={23} color={tabInfo.tintColor} />
      ),
      tabBarColor: '#1E64FF',
      tabBarLabel: <Text style={{ fontSize: 15 }}>Contatos</Text>
    }
  },
};

const BottomTabsNavigator = createMaterialBottomTabNavigator(
  BottomTabsRouteConfig,
  {
    activeColor: 'white',
    shifting: true,
    barStyle: {
      backgroundColor: Colors.primaryColor
    }
  }
);

const MainNavigator = createAnimatedSwitchNavigator(
  {
    Login: LoginNavigator,
    Home: BottomTabsNavigator,
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-left"
          durationMs={500}
          interpolation="easeOut"
        />
        <Transition.In
          type="slide-right"
          durationMs={500}
          interpolation="easeIn"
        />
      </Transition.Together>
    ),
  }
);

export default createAppContainer(MainNavigator);
