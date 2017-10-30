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
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 200,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0]
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1]
        });

        return { opacity, transform: [{ translateY }] };
      }
    })
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
