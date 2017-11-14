import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { AdMobBanner } from 'expo';

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
        <Text
          style={{
            fontFamily: 'Roboto',
            fontSize: 14,
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
        <View>
          <AdMobBanner
            bannerSize="fullBaner"
            adUnitID="ca-app-pub-1600344268902247/7527861885"
            adViewDidReceiveAd={null}
            testDeviceID={__DEV__ ? 'EMULATOR' : ''}
            didFailToReceiveAdWithError={this.bannerError}
          />
        </View>
      </View>
    );
  }
}

export default CardInfo;
