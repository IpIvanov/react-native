import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardInfo from '../components/CardInfo/CardInfo';
import { timeIntervals } from '../config/timeIntervals';

class Day extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.screenProps;
    let dayInfo = data.day;
    let name = data.name;
    let timeInterval = timeIntervals.day;
    return <CardInfo name={name} time={timeInterval} description={dayInfo} />;
  }
}

Day.propTypes = {
  navigation: PropTypes.object
};

export default Day;
