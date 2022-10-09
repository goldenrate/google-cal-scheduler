import moment from 'moment';
import Week from './week';
import Day from './day';

class Month {
  month: number;
  name: string;
  days: number;
  year: number;
  weeks: any[];

  constructor(date: Date) {
    this.month = moment(date).month() + 1;
    this.name = moment(date).format('MMMM');
    this.days = moment(date).daysInMonth();
    this.year = moment(date).year();

    this.weeks = this._createWeeks();
  }

  _createWeeks() {
    let weeks = [];
    let week = null;
    for (let i = 0; i < this.days; i++) {
      const date = new Date(this.year, this.month - 1, i + 1);
      // todo: replace with API check for availability
      const hasAvailability = Math.random() >= 0.6;
      const nextDayWeek = moment(date).add(1, 'd').week();
      debugger;
      if (week === null) {
        week = new Week(date);
        weeks.push(week);
      }
      if (week.weekInYear !== nextDayWeek) {
        // Add the current day to the week and initialize
        week.addDay(new Day(date, hasAvailability, []));
        week = null;
        continue;
      }
      week.addDay(new Day(date, hasAvailability, []));
    }
    return weeks;
  }
}

export default Month;
