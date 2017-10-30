import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabNavigationStack } from '../config/router';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signInfo: [],
      showLoading: true
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = 'https://app-nodejs-mongodb.herokuapp.com/api/signs';

    fetch(url)
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

      // fetch('https://mywebsite.com/endpoint/', {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     firstParam: 'yourValue',
      //     secondParam: 'yourOtherValue',
      //   })
      // })
  };

  render() {
    const data = this.state.signInfo
    const { name } = this.props.navigation.state.params;
    const selectedSign = data.filter(function( obj ) {
      return name === obj.name;
    });
    if(this.state.showLoading) {
      return (
        <ActivityIndicator
          animating={true}
          color="#aa3300"
          style={[styles.center, {height: 100}, {transform: [{scale: 3}]}]}
          size="large"
        />
      );
    } else {
      return (
        <TabNavigationStack screenProps={selectedSign}/>
      );
    }
  }
}

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;

