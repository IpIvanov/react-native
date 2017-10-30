import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardInfo from '../components/CardInfo/CardInfo';
import { timeIntervals } from '../config/timeIntervals';

class Week extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.screenProps;
    let weekInfo = data.week;
    let name = data.name;
    let weekNumber = 'Week of year: ' + timeIntervals.week.weekOfYear;
    let timeInterval =
      timeIntervals.week.startWeek + ' - ' + timeIntervals.week.endWeek;
    return (
      <CardInfo
        name={name}
        time={timeInterval}
        weekNumber={weekNumber}
        description={weekInfo}
      />
    );
  }
}

Week.propTypes = {
  navigation: PropTypes.object
};

export default Week;
