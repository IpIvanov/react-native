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
    return (
      <View>
        <Text>First tab</Text>
      </View>
    );
  }
}

Year.propTypes = {
  navigation: PropTypes.object,
};

export default Year;

