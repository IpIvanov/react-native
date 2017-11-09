/* eslint-disable react/prop-types */
import React from 'react';
import { StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  DrawerNavigator
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import SignsListScreen from '../screens/SignsList';
import SignDetailsScreen from '../screens/SignDetails';
import Day from '../screens/Tabs/Day';
import Week from '../screens/Tabs/Week';
import Month from '../screens/Tabs/Month';
import Year from '../screens/Tabs/Year';

const { width } = Dimensions.get('window');

const mainColor = '#aa3300';

export const NavigationStack = StackNavigator(
  {
    SignsList: {
      screen: SignsListScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Altair's Horoscopes",
        headerLeft: (
          <TouchableOpacity
            style={{ marginLeft: 20 }}
            onPress={() => navigation.navigate('DrawerOpen')}
          >
            <Ionicons name="ios-menu" size={24} color={mainColor} />
          </TouchableOpacity>
        ),
        headerTitleStyle: {
          color: mainColor,
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
      screen: SignDetailsScreen,
      navigationOptions: ({ navigation }) => ({
        headerTintColor: mainColor,
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

export const DrawerNavigatorStack = DrawerNavigator(
  {
    SignsList: {
      screen: NavigationStack
    }
  },
  {
    drawerWidth: width - 150,
    contentOptions: {
      activeTintColor: mainColor,
      itemsContainerStyle: {
        marginVertical: 0
      },
      labelStyle: {
        paddingTop: StatusBar.currentHeight + 20
      },
      iconContainerStyle: {
        opacity: 1
      }
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
