import { colors } from '../config/styles';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.headerText,
    fontWeight: '400',
    fontStyle: 'italic',
  },
});

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Page</Text>
      </View>
    );
  }
}

export default Profile;

