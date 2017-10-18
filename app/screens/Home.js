import { colors } from '../config/styles';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
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
        <Blink text={`id: ${id}`} />
        <Blink text={`title: ${title}`} />
        <Blink text={`description: ${body}`} />
      </View>
    );
  }
}

export default Home;

