import React, { Component } from 'react';
import Home from './app/screens/Home';
import Profile from './app/screens/Profile';
import { TabNavigator } from 'react-navigation'

const MainScreenNavigator = TabNavigator({
  Home: {screen: Home},
  Profile: {screen: Profile}
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true
});

MainScreenNavigator.navigationOptions = {
  title: 'Tab example'
};

export default MainScreenNavigator;

