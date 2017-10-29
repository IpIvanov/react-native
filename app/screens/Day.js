import React, { Component, PropTypes } from 'react';
import { FlatList } from 'react-native';
import moment from 'moment';
import { colors } from '../config/styles';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import { signs } from '../config/signs';

class Day extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.screenProps[0];
    let dayInfo = data.day;
    let name = data.name;
    var now = moment().format('dddd (DD.MM.YYYY)');
    const sign = signs.filter(function( obj ) {
      return name === obj.name;
    });
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
        marginTop: 50,
        backgroundColor: '#fff',
      }}>
        <Image style={{width: 70, height: 70}} source={sign[0].img}/>
        <Text style={{ fontFamily: 'Roboto', fontSize: 20, marginBottom: 10 }}>{name}</Text>
        <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginBottom: 10, color: colors.dimmedText }}>{now}</Text>
        <ScrollView>
          <Text style={{ fontFamily: 'Roboto', fontSize: 16 }}>{dayInfo}</Text>
        </ScrollView>
      </View>
    );
  }
}

Day.propTypes = {
  navigation: PropTypes.object,
};

export default Day;

