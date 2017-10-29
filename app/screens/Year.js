import React, { Component, PropTypes } from 'react';
import { FlatList } from 'react-native';

import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

class Year extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let yearInfo = this.props.screenProps[0].year;
    return (
      <View>
        <Text>{yearInfo}</Text>
      </View>
    );
  }
}

Year.propTypes = {
  navigation: PropTypes.object,
};

export default Year;

