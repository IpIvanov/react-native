import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from './styles';
import { colors } from '../../config/styles';
import { signs } from '../../config/signs';

class CardInfo extends Component {
  render() {
    let name = this.props.name;
    let sign = signs.filter(function(obj) {
      return name === obj.name;
    });
    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: 'Roboto', fontSize: 20, marginBottom: 10 }}>
          {this.props.name}
        </Text>
        <Image style={styles.img} source={sign[0].img} />
        <Text
          style={{
            fontFamily: 'Roboto',
            fontSize: 14,
            marginTop: 10,
            marginBottom: 10,
            color: colors.dimmedText
          }}
        >
          {this.props.weekNumber}
        </Text>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontSize: 14,
            marginBottom: 10,
            color: colors.dimmedText
          }}
        >
          {this.props.time}
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ fontFamily: 'Roboto', fontSize: 16 }}>
            {this.props.description}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default CardInfo;
