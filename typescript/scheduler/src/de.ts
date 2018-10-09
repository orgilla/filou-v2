import * as moment from 'moment';

const Calendar = require('react-big-calendar');

moment.locale('de');
const localizer = Calendar.momentLocalizer(moment);

export default localizer;
