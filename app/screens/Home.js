import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  FlatList
} from 'react-native';
import { colors } from '../config/styles';
import { signs } from '../config/signs';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#fff'
  },
  innerContainer: {
    elevation: 1,
    borderRadius: 2,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 0,
    marginBottom: 6
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  flatList: {
    alignSelf: 'stretch'
  },
  img: {
    width: 70,
    height: 70
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 20
  },
  date: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: colors.dimmedText
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
  }

  handleRowPress = item => {
    this.props.navigation.navigate('Profile', {
      sign: item.name
    });
  };

  _renderItem = ({ item }) => {
    return (
      <TouchableHighlight
        underlayColor="#fff"
        activeOpacity={0.8}
        onPress={() => this.handleRowPress(item)}
      >
        <View style={styles.innerContainer}>
          <Image style={styles.img} source={item.img} />
          <View style={styles.column}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={signs}
          renderItem={this._renderItem}
          keyExtractor={item => item.name}
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object
};

export default Home;
