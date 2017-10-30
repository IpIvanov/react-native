import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardInfo from '../components/CardInfo/CardInfo';

import { signs } from '../config/signs';
import { timeIntervals } from '../config/timeIntervals';

class Month extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.screenProps;
    let monthInfo = data.month;
    let name = data.name;
    let timeInterval = timeIntervals.month;
    let sign = signs.filter(function(obj) {
      return name === obj.name;
    });
    return (
      <CardInfo
        image={sign[0].img}
        name={name}
        time={timeInterval}
        description={monthInfo}
      />
    );
  }
}

Month.propTypes = {
  navigation: PropTypes.object
};

export default Month;
