import React, { Component, PropTypes } from 'react';
import { FlatList } from 'react-native';

import { colors } from '../config/styles';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
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
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props.navigation.state.params;
    const { sign } = this.props.navigation.state.params;
    const selectedSign = data.filter(function( obj ) {
      return sign.name === obj.name;
    });

    return (
      <ScrollView>
        <Text>Profile Page</Text>
        <Text>{sign.name}</Text>
        <Text>{selectedSign[0].day}</Text>
        <Text>{selectedSign[0].month}</Text>
      </ScrollView>
    );
  }
}

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;

