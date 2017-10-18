import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from './styles';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true
    };

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 10000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={[styles.title]}> {display} </Text>
    );
  }
}

export default Blink;
