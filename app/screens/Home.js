import { colors } from '../config/styles';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

import Blink from '../components/Blink/Blink';

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

  render() {
    let title = this.state.data.title;
    let body = this.state.data.body;
    let id = this.state.data.userId;
    return (
      <View style={styles.container}>
        <Text> Home Screen </Text>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-PUNCT16vUlUY5cmCPAllVjo-Rf1kT_9YsV3FKvELZzAIdFpew'}}
        />
        <Blink text={`id: ${id}`} />
        <Blink text={`title: ${title}`} />
        <Blink text={`description: ${body}`} />
      </View>
    );
  }
}

export default Home;

