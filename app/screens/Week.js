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
    return (
      <View>
        <Text>First tab</Text>
      </View>
    );
  }
}

Week.propTypes = {
  navigation: PropTypes.object,
};

export default Week;

