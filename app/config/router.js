/* eslint-disable react/prop-types */
import React from 'react';
import {
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Text,
  View
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  DrawerNavigator,
  DrawerItems
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

import SignsListScreen from '../screens/SignsList/SignsList';
import SignDetailsScreen from '../screens/SignDetails/SignDetails';
import Day from '../screens/Tabs/Day';
import Week from '../screens/Tabs/Week';
import Month from '../screens/Tabs/Month';
import Year from '../screens/Tabs/Year';
import BirthdayDetailsScreen from '../screens/BirthdayDetails/BirthdayDetails';
import LuckyNumbersScreen from '../screens/LuckyNumbers/LuckyNumbers';

import HeaderSignDetails from '../components/HeaderSignDetails/HeaderSignDetails';

const { width } = Dimensions.get('window');

const mainColor = '#aa3300';

const headerStyle = {
  height: 40,
  marginTop: StatusBar.currentHeight,
  paddingLeft: 5
};

const headerTitleStyle = {
  color: mainColor,
  fontSize: 14,
  fontWeight: '600'
};

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
        headerTitleStyle: headerTitleStyle,
        headerStyle: headerStyle
      })
    },
    SignDetails: {
      screen: SignDetailsScreen,
      navigationOptions: ({ navigation }) => ({
        headerTintColor: mainColor,
        headerRight: <HeaderSignDetails infoProps={navigation.state.params} />,
        headerStyle: headerStyle
      })
    },
    BirthdayDetails: {
      screen: BirthdayDetailsScreen,
      navigationOptions: ({ navigation }) => ({
        title: `Birthday Horoscope for ${moment().format('MMMM Do')}`,
        headerTintColor: mainColor,
        headerTitleStyle: headerTitleStyle,
        headerStyle: headerStyle
      })
    },
    LuckyNumbers: {
      screen: LuckyNumbersScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Lucky Numbers',
        headerTintColor: mainColor,
        headerTitleStyle: headerTitleStyle,
        headerStyle: headerStyle
      })
    }
  },
  {
    initialRouteName: 'SignsListScreen',
    headerMode: 'float',
    mode: 'card',
    initialRouteName: 'SignsList',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export const DrawerNavigatorStack = DrawerNavigator(
  {
    SignsList: {
      screen: NavigationStack,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: () => null
      })
    },
    BirthdayDetails: {
      screen: BirthdayDetailsScreen,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: () => {
          return `Birthday Horoscope`;
        }
      })
    },
    LuckyNumbers: {
      screen: LuckyNumbersScreen,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: () => {
          return `Lucky Numbers`;
        }
      })
    }
  },
  {
    initialRouteName: 'SignsList',
    drawerWidth: width - 130,
    drawerPosition: 'right',
    drawerBackgroundColor: '#fff',
    contentComponent: props => {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start'
          }}
        >
          <Text
            style={{
              color: mainColor,
              fontSize: 16,
              fontWeight: '600',
              textAlign: 'center',
              textAlignVertical: 'center',
              marginTop: StatusBar.currentHeight,
              borderBottomWidth: 1,
              borderBottomColor: '#d6d7da',
              height: 40
            }}
          >
            Menu
          </Text>
          <DrawerItems {...props} />
        </View>
      );
    },
    contentOptions: {
      activeTintColor: mainColor,
      activeBackgroundColor: '#fff',
      labelStyle: {
        color: mainColor,
        fontSize: 14,
        fontWeight: '600',
        flex: 1,
        textAlign: 'center'
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
    initialRouteName: 'Day',
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
        height: 30,
        padding: 0,
        margin: 0,
        paddingBottom: 5
      }
    }
  }
);
