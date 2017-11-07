import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    right: 10,
    bottom: 10
  }
});

class SetFavoriteSign extends Component {
  handleItemPress() {
    this.props.updateSigns(this.props.index, !this.props.isFavorite);
  }

  render() {
    if (this.props.isFavorite) {
      return (
        <TouchableHighlight
          underlayColor="#fff"
          activeOpacity={0.5}
          onPress={() => this.handleItemPress()}
          style={styles.position}
        >
          <Ionicons name="ios-star" size={18} color="#9F9F9F" />
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableHighlight
          underlayColor="#fff"
          activeOpacity={0.5}
          onPress={() => this.handleItemPress()}
          style={styles.position}
        >
          <Ionicons name="ios-star-outline" size={18} color="#9F9F9F" />
        </TouchableHighlight>
      );
    }
  }
}

export default SetFavoriteSign;
