/* eslint-disable react/prop-types */
import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

import { DrawerButton } from '../components/Header';

const LeftDrawerButton = ({ navigate }) => {
  if (Platform.OS === 'android') {
    return <DrawerButton onPress={() => navigate('DrawerOpen')} />;
  }

  return null;
};

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <LeftDrawerButton {...navigation} />
    }),
  }
});

export const ProfileStack = StackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: <LeftDrawerButton {...navigation} />,
    }),
  },
});

export const Tabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor} />,
    },
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'New Contact',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-add" size={35} color={tintColor} />,
    },
  }
});

export const Drawer = DrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      drawerLabel: 'New Contact',
    },
  }
});
