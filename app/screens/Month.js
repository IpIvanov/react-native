import React, { Component, PropTypes } from 'react';
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
    return (
      <View>
        <Text>Second tab</Text>
      </View>
    );
  }
}

Month.propTypes = {
  navigation: PropTypes.object,
};

export default Month;

