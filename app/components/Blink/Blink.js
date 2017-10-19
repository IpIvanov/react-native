import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from './styles';

class Blink extends Component {
  render() {
    return (
      <Text style={[styles.title]}> {this.props.text} </Text>
    );
  }
}

export default Blink;
