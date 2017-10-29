import React, { Component, PropTypes } from 'react';
import { FlatList } from 'react-native';

import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

class Day extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenProps: this.props.screenProps,
    };
  }

  render() {
    alert(this.state.screenProps)
    return (
      <View>
        <Text>{this.state.day}</Text>
      </View>
    );
  }
}

Day.propTypes = {
  navigation: PropTypes.object,
};

export default Day;

