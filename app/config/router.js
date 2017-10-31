/* eslint-disable react/prop-types */
import React from 'react';
import { Easing, Animated } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Day from '../screens/Day';
import Week from '../screens/Week';
import Month from '../screens/Month';
import Year from '../screens/Year';

export const NavigationStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: 'Home'
      })
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        title: 'Profile'
      })
    }
  },
  {
    headerMode: 'none',
    mode: 'card',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export const TabNavigationStack = TabNavigator(
  {
    Day: {
      screen: Day
    },
    Week: {
      screen: Week
    },
    Month: {
      screen: Month
    },
    Year: {
      screen: Year
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swpie: true,
    backBehavior: 'none',
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: '#333',
      labelStyle: {
        fontSize: 12
      },
      style: {
        height: 35,
        padding: 0,
        margin: 0,
        paddingBottom: 5
      }
    }
  }
);
