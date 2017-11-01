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
  }

  getInitialState() {
    return {
      signInfo: null,
      showLoading: true
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const API_URL = 'https://app-nodejs-mongodb.herokuapp.com/api/sign';
    const { SIGN } = this.props.navigation.state.params;
    const PARAMS = '?sign=' + SIGN;
    const REQUEST_URL = API_URL + PARAMS;

    fetch(REQUEST_URL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          signInfo: res,
          showLoading: false
        });
      })
      .done();
  };

  renderLoadingView = () => {
    <ActivityIndicator
      animating={true}
      color="#aa3300"
      style={[styles.center, { height: 100 }, { transform: [{ scale: 3 }] }]}
      size="large"
    />;
  };

  render() {
    if (this.state.showLoading) {
      return this.renderLoadingView();
    }

    const signInfo = this.state.signInfo;
    return <TabNavigationStack screenProps={signInfo} />;
  }
}

Profile.propTypes = {
  navigation: PropTypes.object
};

export default Profile;
