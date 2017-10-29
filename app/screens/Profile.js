import React, { Component, PropTypes } from 'react';
import { TabNavigationStack } from '../config/router';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signInfo: [],
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
        })
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
    return (
      <TabNavigationStack screenProps={selectedSign}/>
    );
  }
}

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;

