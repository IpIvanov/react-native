import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from './styles';

class CardInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={this.props.image}/>
        <Text style={{ fontFamily: 'Roboto', fontSize: 20, marginBottom: 10 }}>{this.props.name}</Text>
        <Text style={{ fontFamily: 'Roboto', fontSize: 14, marginBottom: 10, color: colors.dimmedText }}>{this.props.time}</Text>
        <ScrollView>
          <Text style={{ fontFamily: 'Roboto', fontSize: 16 }}>{this.props.description}</Text>
        </ScrollView>
      </View>
    );
  }
}

export default CardInfo;
