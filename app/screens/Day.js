import React, { Component, PropTypes } from 'react';
import { FlatList } from 'react-native';
import moment from 'moment';
import { colors } from '../config/styles';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import { signs } from '../config/signs';

class Day extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.screenProps[0];
    let dayInfo = data.day;
    let name = data.name;
    var now = moment().format('dddd (DD.MM.YYYY)');
    const sign = signs.filter(function( obj ) {
      return name === obj.name;
    });
    return (
      <CardInfo image={sign[0].img} name={name} time={now} description={dayInfo}/>
    );
  }
}

Day.propTypes = {
  navigation: PropTypes.object,
};

export default Day;

