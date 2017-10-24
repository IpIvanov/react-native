import React, { Component, PropTypes } from 'react';
import { FlatList } from 'react-native';

import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableHighlight
} from 'react-native';

import { colors } from '../config/styles';

import Blink from '../components/Blink/Blink';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: colors.background,
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.headerText,
    fontWeight: '400',
    fontStyle: 'italic',
  },
  images: {
    flex: 1/2,
    maxWidth: 70,
    maxHeight: 70,
    margin: 20
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res
        })
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRowPress = () => {
    this.props.navigation.navigate('Profile');
  };

  render() {
    let title = this.state.data.title;
    let body = this.state.data.body;
    let id = this.state.data.userId;
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.handleRowPress()}>
          <Image style={styles.images} source={require('../images/scorpio200.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleRowPress()}>
          <Image style={styles.images} source={require('../images/scorpio200.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleRowPress()}>
          <Image style={styles.images} source={require('../images/scorpio200.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleRowPress()}>
          <Image style={styles.images} source={require('../images/scorpio200.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleRowPress()}>
          <Image style={styles.images} source={require('../images/scorpio200.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleRowPress()}>
          <Image style={styles.images} source={require('../images/scorpio200.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleRowPress()}>
          <Image style={styles.images} source={require('../images/scorpio200.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleRowPress()}>
          <Image style={styles.images} source={require('../images/scorpio200.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleRowPress()}>
          <Image style={styles.images} source={require('../images/scorpio200.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleRowPress()}>
          <Image style={styles.images} source={require('../images/scorpio200.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleRowPress()}>
          <Image style={styles.images} source={require('../images/scorpio200.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleRowPress()}>
          <Image style={styles.images} source={require('../images/scorpio200.png')} />
        </TouchableHighlight>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;

