import moment from 'moment';
import Day from './day';

class Week {
  date: Date;
  weekInYear: number;
  parentMonth: number;
  childrenDays: Day[];
  constructor(date: Date) {
    this.date = date;
    this.weekInYear = moment(date).week();
    // Expressed as 1-12 instead of 0-11
    this.parentMonth = moment(date).month() + 1;
    this.childrenDays = [];
  }
  addDay(day: Day) {
    this.childrenDays.push(day);
  }

  /*
   * Returns the first day of the week as a number in the set [0...6]
   * whereby 0 is Sunday, 1 is Monday etc.
   */
  getFirstDayIndex() {
    return this.childrenDays[0].day;
  }

  /*
   * Returns the last day of the week as a number in the set [0...6]
   * whereby 0 is Sunday, 1 is Monday etc.
   */
  getLasDayIndex() {
    return this.childrenDays[this.childrenDays.length - 1].day;
  }
}

export default Week;
