import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Text, View } from 'react-native';

import styles from './styles';

class Loader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Please wait...</Text>
        <ActivityIndicator
          animating={true}
          color="#aa3300"
          style={[{ height: 80 }]}
          size="large"
        />
      </View>
    );
  }
}

Loader.propTypes = {
  navigation: PropTypes.object
};

export default Loader;
