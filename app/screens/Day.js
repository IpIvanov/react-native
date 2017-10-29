import React, { Component, PropTypes } from 'react';
import { FlatList } from 'react-native';
import moment from 'moment';

import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

class Day extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.screenProps[0];
    let dayInfo = data.day;
    let name = data.name;
    var now = moment().format();
    return (
      <View style={{
        elevation: 1,
        borderRadius: 2,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 20,
        margin: 20,
        marginTop: 20,
        backgroundColor: '#fff',
      }}>
        <Text style={{ fontFamily: 'Roboto', fontSize: 20, marginBottom: 10 }}>{name}</Text>
        <Text>{now}</Text>
        <Text style={{ fontFamily: 'Roboto', fontSize: 16 }}>{dayInfo}</Text>
      </View>
    );
  }
}

Day.propTypes = {
  navigation: PropTypes.object,
};

export default Day;

