import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  ScrollView,
  DatePickerAndroid,
  Button,
  TextInput,
  Keyboard,
  ListView
} from 'react-native';
import moment from 'moment';
import styles from './styles';
import Loader from '../../components/Loader/Loader';

class LuckyNumbers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      birthDate: '',
      showLoading: false,
      buttonIsDisabled: true,
      luckyNumbers: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  }

  async _showPicker(stateKey, options) {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: moment().toDate(),
        minDate: moment()
          .subtract(100, 'years')
          .toDate(),
        maxDate: moment().toDate(),
        colorAccent: '#aa3300'
      });

      if (action !== DatePickerAndroid.dismissedAction) {
        let input = moment([year, month, day]).format('DD / MM / YYYY');
        this.setState({
          birthDate: input
        });
        this.setState({
          buttonIsDisabled: false
        });
      } else {
        this.setState({
          birthDate: ''
        });
        this.setState({
          buttonIsDisabled: true
        });
      }

      Keyboard.dismiss();
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  }

  _setLuckyNumbers() {
    let numbers = [];

    this.setState({
      showLoading: true
    });

    let range = Math.floor(Math.random() * 10) + 1;

    while (numbers.length <= range) {
      let numRand = Math.floor(Math.random() * 36) + 1;
      if (!numbers.includes(numRand)) {
        numbers.push(numRand);
      }
    }

    let dateNumbers = this.state.birthDate
      .split(' ')
      .join()
      .split('')
      .map(item => {
        if (!isNaN(item)) {
          return Number(item);
        }
        return 0;
      });

    let birthLuckyNumber = 0;

    dateNumbers.forEach(number => {
      birthLuckyNumber += number;
    });

    numbers.push(birthLuckyNumber);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.setState({
      luckyNumbers: ds.cloneWithRows(numbers)
    });

    setTimeout(() => {
      this.setState({
        showLoading: false
      });
    }, 600);
  }

  render() {
    const birthDayDetails = this.state.birthDayDetails;
    if (this.state.showLoading) {
      return <Loader />;
    } else {
      let n = this.state.luckyNumbers.getRowCount();
      if (n > 0) {
        return (
          <View style={styles.mainContainer}>
            <Text style={styles.numbers}>Your lucky numbers are:</Text>

            <ScrollView style={styles.innerContainer}>
              <ListView
                style={{ marginTop: 20 }}
                dataSource={this.state.luckyNumbers}
                renderRow={number => {
                  return <Text style={styles.numbers}>{number}</Text>;
                }}
                renderSeparator={(item, index) => {
                  return <Text style={styles.numbers}> </Text>;
                }}
              />
            </ScrollView>
          </View>
        );
      } else {
        return (
          <View style={styles.mainContainer}>
            <TextInput
              style={styles.dateText}
              textAlign="center"
              underlineColorAndroid="#aa3300"
              placeholder="Select Birth Date"
              onFocus={() => this._showPicker('onFocus')}
              value={this.state.birthDate}
            />
            <Button
              color="#aa3300"
              disabled={this.state.buttonIsDisabled}
              onPress={() => {
                this._setLuckyNumbers();
              }}
              title="Get Numbers"
            />
          </View>
        );
      }
    }
  }
}

LuckyNumbers.propTypes = {
  navigation: PropTypes.object
};

export default LuckyNumbers;
