import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView } from 'react-native';
import moment from 'moment';

import styles from './styles';
import Loader from '../../components/Loader/Loader';

class BirthdayDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      birthDayDetails: {},
      showLoading: true
    };
  }

  componentWillMount() {
    this._fetchBirthdayInfo();
  }

  _fetchBirthdayInfo() {
    const url =
      'https://app-nodejs-mongodb.herokuapp.com/api/birthday-horoscope';

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          birthDayDetails: res,
          showLoading: false
        });
      })
      .done();
  }

  render() {
    const birthDayDetails = this.state.birthDayDetails;
    if (this.state.showLoading) {
      return <Loader />;
    } else {
      return (
        <ScrollView style={styles.mainContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Zodiac</Text>
            <Text style={styles.info}>{this.state.birthDayDetails.zodiac}</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Planetary Influence</Text>
            <Text style={styles.info}>
              {this.state.birthDayDetails.planet_influence}
            </Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Element</Text>
            <Text style={styles.info}>
              {this.state.birthDayDetails.element}
            </Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Career</Text>
            <Text style={styles.info}>{this.state.birthDayDetails.career}</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Sabian Symbol</Text>
            <Text style={styles.info}>{this.state.birthDayDetails.symbol}</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Celebrity Relationships</Text>
            <Text style={styles.info}>
              {this.state.birthDayDetails.celebritiesTitle}
            </Text>
            <Text style={styles.info}>
              {this.state.birthDayDetails.celebrities}
            </Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Number and Card</Text>
            <Text style={styles.info}>
              {this.state.birthDayDetails.numberAndCard}
            </Text>
          </View>
        </ScrollView>
      );
    }
  }
}

BirthdayDetails.propTypes = {
  navigation: PropTypes.object
};

export default BirthdayDetails;
