import React, { Component, PropTypes } from 'react';
import { TabNavigationStack } from '../config/router';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from 'react-native';

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
          style={[{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },{height: 100}, {transform: [{scale: 3}]}]}
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

