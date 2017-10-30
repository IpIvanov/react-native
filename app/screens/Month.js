import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

class Month extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let monthInfo = this.props.screenProps[0].month;
    return (
      <View>
        <Text>{monthInfo}</Text>
      </View>
    );
  }
}

Month.propTypes = {
  navigation: PropTypes.object,
};

export default Month;

