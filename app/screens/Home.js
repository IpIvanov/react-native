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
  StatusBar
} from 'react-native';
import { Permissions, Notifications, Constants } from 'expo';
import moment from 'moment';
import SetFavoriteSign from '../components/SetFavoriteSign/SetFavoriteSign';

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

class Home extends Component {
  constructor(props) {
    super(props);

    this._handleAppStateChange = this._handleAppStateChange.bind(this);
    this.state = { signs: [] };
  }

  async componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);

    let storedSign = await this._getfavoriteSign();
    let result = JSON.parse(storedSign);

    if (result) {
      this.setState({
        signs: signs.map((item, i) => {
          let updatedSign = { ...item };
          if (result.id - 1 === i) {
            updatedSign.isFavorite = !updatedSign.isFavorite;
          }
          return updatedSign;
        })
      });
    } else {
      this.setState({
        signs: signs
      });
    }
  }

  componentWillUnmount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  async _handleAppStateChange(appState) {
    if (appState === 'active') {
      console.log('cancel notification');
      Notifications.addListener(this._handleNotification);
      Notifications.cancelAllScheduledNotificationsAsync();
    }
    if (appState === 'background') {
      let permissionsResult = await Permissions.askAsync(
        Permissions.NOTIFICATIONS
      );

      //if (Constants.isDevice && permissionsResult.status === 'granted') {

      //}

      let favoriteSign = this.state.signs.filter(sign => {
        return sign.isFavorite;
      });
      if (favoriteSign.length > 0) {
        console.log('Notification permissions granted.');
        this._sendDelayedNotification(favoriteSign[0]);
      }
    }
  }

  _handleNotification = ({ origin, data }) => {
    console.info(`Notification (${origin}) with data: ${JSON.stringify(data)}`);
    if (origin === 'selected') {
      this.props.navigation.navigate('Profile', {
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
        //icon: 'https://image.ibb.co/jr4aVw/app_icon.png',
        priority: 'high',
        vibrate: true
      }
    };
    const schedulingOptions = {
      // moment()
      //   .endOf('day')
      //   .add(10, 'hours')
      //   .unix() * 1000,
      time:
        moment()
          .add(1000, 'milliseconds')
          .unix() * 1000,
      repeat: 'day'
    };

    Notifications.scheduleLocalNotificationAsync(
      localNotification,
      schedulingOptions
    )
      .then(id =>
        console.info(
          `Delayed notification scheduled (${id}) at ${moment(
            schedulingOptions.time
          ).format()}`
        )
      )
      .catch(err => console.error(err));
  }

  async _setLocalStore(selectedValue) {
    try {
      await AsyncStorage.setItem('favoriteSign', JSON.stringify(selectedValue));
    } catch (error) {
      alert('Something went wrong! Error: ' + error);
    }
  }

  async _getfavoriteSign() {
    let storedItem = await AsyncStorage.getItem('favoriteSign');
    return storedItem;
  }

  async _clearLocalStore() {
    await AsyncStorage.clear();
  }

  updateSigns = (index, selectedValue) => {
    let signs = this.state.signs;

    if (selectedValue) {
      this._setLocalStore(signs[index]);
    } else {
      this._clearLocalStore();
    }

    this.setState({
      signs: signs.map((item, i) => {
        let updatedSign = { ...item };
        updatedSign.isFavorite = false;
        if (i === index) {
          updatedSign.isFavorite = selectedValue;
        }
        return updatedSign;
      })
    });
  };

  handleRowPress = item => {
    this.props.navigation.navigate('Profile', {
      sign: item.name
    });
  };

  _renderItem = ({ item, index }) => {
    return (
      <TouchableHighlight
        underlayColor="#fff"
        activeOpacity={0.8}
        onPress={() => this.handleRowPress(item)}
      >
        <View style={styles.innerContainer}>
          <Image style={styles.img} source={item.img} />
          <View style={styles.column}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <SetFavoriteSign
            updateSigns={this.updateSigns}
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

Home.propTypes = {
  navigation: PropTypes.object
};

export default Home;
