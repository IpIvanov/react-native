import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ActivityIndicator, Text, View } from 'react-native';

import { TabNavigationStack } from '../config/router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: '#696969',
    marginRight: 10
  }
});

class SignDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signInfo: {},
      showLoading: true
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = 'https://app-nodejs-mongodb.herokuapp.com/api/sign';
    const { name } = this.props.navigation.state.params;

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sign: name
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          signInfo: res,
          showLoading: false
        });
      })
      .done();
  };

  render() {
    const signInfo = this.state.signInfo;
    if (this.state.showLoading) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Please wait...</Text>
          <ActivityIndicator
            animating={true}
            color="#aa3300"
            style={[{ height: 80 }]}
            size="large"
          />
        </View>
      );
    } else {
      return <TabNavigationStack screenProps={signInfo} />;
    }
  }
}

SignDetails.propTypes = {
  navigation: PropTypes.object
};

export default SignDetails;
