import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  FlatList,
  AsyncStorage,
  AppState,
  ToastAndroid
} from 'react-native';
import { Permissions, Notifications, Constants } from 'expo';
import moment from 'moment';

import FavoriteSign from '../components/FavoriteSign/FavoriteSign';
import { signs } from '../config/signs';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  innerContainer: {
    elevation: 1,
    borderRadius: 2,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 0,
    marginBottom: 6
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  flatList: {
    alignSelf: 'stretch'
  },
  img: {
    width: 70,
    height: 70
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 20
  },
  date: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#696969'
  }
});

class SignsList extends Component {
  constructor(props) {
    super(props);

    this.state = { signs: [] };
    this._handleAppStateChange = this._handleAppStateChange.bind(this);
  }

  async componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);

    let storedSign = await this._getfavoriteSignFromLocalStorage();
    let result = JSON.parse(storedSign);

    if (result) {
      let signsWithFavorite = [...signs];
      signsWithFavorite[result.id - 1].isFavorite = true;
      this.setState({
        signs: signsWithFavorite
      });
    } else {
      this.setState({
        signs: signs
      });
    }
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  async _handleAppStateChange(appState) {
    if (appState === 'active') {
      Notifications.addListener(this._handleNotificationPress);
      Notifications.cancelAllScheduledNotificationsAsync();
    }
    if (appState === 'background') {
      let permissionsResult = await Permissions.askAsync(
        Permissions.NOTIFICATIONS
      );

      if (Constants.isDevice && permissionsResult.status === 'granted') {
        let favoriteSign = this.state.signs.filter(sign => {
          return sign.isFavorite;
        });
        if (favoriteSign.length > 0) {
          this._sendDelayedNotification(favoriteSign[0]);
        }
      }
    }
  }

  _handleNotificationPress = ({ origin, data }) => {
    if (origin === 'selected') {
      this.props.navigation.navigate('SignDetails', {
        sign: data.favoriteSign.name
      });
    }
  };

  _sendDelayedNotification(favoriteSign) {
    const localNotification = {
      title: favoriteSign.name,
      body: 'Your daily horoscope is ready you can check it out!',
      data: { favoriteSign: favoriteSign },
      android: {
        priority: 'high',
        vibrate: true
      }
    };

    const schedulingOptions = {
      time:
        moment()
          .endOf('day')
          .add(10, 'hours')
          .unix() * 1000,
      repeat: 'day'
    };

    Notifications.scheduleLocalNotificationAsync(
      localNotification,
      schedulingOptions
    );
  }

  async _setLocalStorage(selectedValue) {
    try {
      await AsyncStorage.setItem('favoriteSign', JSON.stringify(selectedValue));
    } catch (error) {
      alert('Something went wrong! Error: ' + error);
    }
  }

  async _clearLocalStorage() {
    await AsyncStorage.clear();
  }

  async _getfavoriteSignFromLocalStorage() {
    let storedItem = await AsyncStorage.getItem('favoriteSign');
    return storedItem;
  }

  toggleFavorite = (index, selectedValue) => {
    let signs = this.state.signs;

    if (selectedValue) {
      this._setLocalStorage(signs[index]);
      ToastAndroid.showWithGravityAndOffset(
        `Daily notifications for ${signs[index].name} are set.`,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    } else {
      this._clearLocalStorage();
    }
    this.setState({
      signs: signs.map((item, i) => {
        let clonedSign = { ...item };
        clonedSign.isFavorite = false;
        if (i === index) {
          clonedSign.isFavorite = selectedValue;
        }
        return clonedSign;
      })
    });
  };

  handleRowPress = name => {
    this.props.navigation.navigate('SignDetails', {
      name: name
    });
  };

  _renderItem = ({ item, index }) => {
    return (
      <TouchableHighlight
        underlayColor="#fff"
        activeOpacity={0.8}
        onPress={() => this.handleRowPress(item.name)}
      >
        <View style={styles.innerContainer}>
          <Image style={styles.img} source={item.img} />
          <View style={styles.column}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <FavoriteSign
            toggleFavorite={this.toggleFavorite}
            index={index}
            isFavorite={item.isFavorite}
          />
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={this.state.signs}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          extraData={this.state}
        />
      </View>
    );
  }
}

SignsList.propTypes = {
  navigation: PropTypes.object
};

export default SignsList;
