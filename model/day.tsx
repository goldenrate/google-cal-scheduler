import moment from 'moment';

class Day {
  date: Date;
  day: number;
  name: string;
  hasAvailability: any;
  // Takes a date object and populate the day class
  constructor(date: Date, hasAvailability: boolean, events: string[]) {
    this.date = date;
    this.day = moment(date).day(); //weekday 
    this.name = moment(date).format('dddd');
    this.hasAvailability = hasAvailability;
  }
}

export default Day;
