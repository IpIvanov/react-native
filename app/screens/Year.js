import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardInfo from '../components/CardInfo/CardInfo';

import { signs } from '../config/signs';
import { timeIntervals } from '../config/timeIntervals';

class Year extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.screenProps;
    let yearInfo = data.year;
    let name = data.name;
    let timeInterval = timeIntervals.year;
    let sign = signs.filter(function(obj) {
      return name === obj.name;
    });
    return (
      <CardInfo
        image={sign[0].img}
        name={name}
        time={timeInterval}
        description={yearInfo}
      />
    );
  }
}

Year.propTypes = {
  navigation: PropTypes.object
};

export default Year;
