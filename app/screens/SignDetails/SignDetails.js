import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ActivityIndicator, Text, View } from 'react-native';

import { TabNavigationStack } from '../../config/router';
import Loader from '../../components/Loader/Loader';

class SignDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signInfo: {},
      showLoading: true
    };
  }

  componentDidMount() {
    this._fetchSignDetails();
  }

  _fetchSignDetails = () => {
    const url = 'https://app-nodejs-mongodb.herokuapp.com/api/sign';
    const { sign } = this.props.navigation.state.params;

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sign: sign.name
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
      return <Loader />;
    } else {
      return <TabNavigationStack screenProps={signInfo} />;
    }
  }
}

SignDetails.propTypes = {
  navigation: PropTypes.object
};

export default SignDetails;
