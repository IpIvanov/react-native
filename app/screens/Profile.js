import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ActivityIndicator } from 'react-native';

import { TabNavigationStack } from '../config/router';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class Profile extends Component {
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
    const { sign } = this.props.navigation.state.params;

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sign: sign
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          signInfo: res
        });
        this.setState({ showLoading: false });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  render() {
    const signInfo = this.state.signInfo;
    if (this.state.showLoading) {
      return (
        <ActivityIndicator
          animating={true}
          color="#aa3300"
          style={[
            styles.center,
            { height: 100 },
            { transform: [{ scale: 3 }] }
          ]}
          size="large"
        />
      );
    } else {
      return <TabNavigationStack screenProps={signInfo} />;
    }
  }
}

Profile.propTypes = {
  navigation: PropTypes.object
};

export default Profile;
