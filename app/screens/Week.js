import React, { Component, PropTypes } from 'react';
import { FlatList } from 'react-native';

import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

class Week extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let weekInfo = this.props.screenProps[0].week;
    return (
      <View>
        <Text>{weekInfo}</Text>
      </View>
    );
  }
}

Week.propTypes = {
  navigation: PropTypes.object,
};

export default Week;

