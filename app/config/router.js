/* eslint-disable react/prop-types */
import React from 'react';
import { Easing, Animated, Text, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import SignsList from '../screens/SignsList';
import SignDetails from '../screens/SignDetails';
import Day from '../screens/Tabs/Day';
import Week from '../screens/Tabs/Week';
import Month from '../screens/Tabs/Month';
import Year from '../screens/Tabs/Year';

export const NavigationStack = StackNavigator(
  {
    SignsList: {
      screen: SignsList,
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
    SignDetails: {
      screen: SignDetails,
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
