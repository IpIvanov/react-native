import moment from 'moment';

export const timeIntervals = {
  day: moment().format('dddd (DD.MM.YYYY)'),
  week: {
    weekOfYear: moment().format('Wo'),
    startWeek: moment()
      .startOf('isoWeek')
      .format('dddd (DD.MM)'),
    endWeek: moment()
      .endOf('isoWeek')
      .format('dddd (DD.MM)')
  },
  month: moment().format('MMMM'),
  year: moment().format('YYYY')
};
