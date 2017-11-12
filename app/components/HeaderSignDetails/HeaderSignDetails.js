import React, { Component } from 'react';
import { Image, View, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

class HeaderSignDetails extends Component {
  render() {
    return (
      <View>
        <Image
          style={{
            width: 35,
            height: 35,
            marginRight: width / 2 - 20
          }}
          source={this.props.infoProps.sign.img}
        />
      </View>
    );
  }
}

export default HeaderSignDetails;
