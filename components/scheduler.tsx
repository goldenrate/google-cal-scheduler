import * as React from 'react';
import Year from '../model/year';
import MonthElement from './month-element';

const year = new Year(new Date('2022-10-1'));
// const month = year.getMonthByName('october');
const month = year.getMonth(8);

const Scheduler: React.FC<{ year: Year }> = ({ year }) => {
  return (
    <tbody>
      <MonthElement month={month} />
    </tbody>
  );
};

export default Scheduler;
