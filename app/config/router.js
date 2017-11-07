/* eslint-disable react/prop-types */
import React from 'react';
import { Easing, Animated, Text, StatusBar } from 'react-native';
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
        title: "Altair's Horoscopes",
        headerTitleStyle: {
          color: '#aa3300',
          fontSize: 14,
          fontWeight: '600'
        },
        headerStyle: {
          height: 40,
          marginTop: StatusBar.currentHeight
        }
      })
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        headerTintColor: '#aa3300',
        headerStyle: {
          height: 40,
          marginTop: StatusBar.currentHeight
        }
      })
    }
  },
  {
    headerMode: 'screen',
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
